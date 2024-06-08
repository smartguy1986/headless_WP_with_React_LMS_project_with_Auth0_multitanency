<?php
if (!defined('ABSPATH'))
    exit;

require_once __DIR__ . '../../../../../../vendor/autoload.php';

use \Firebase\JWT\JWT;

add_action('rest_api_init', 'an_register_auth0_service', 20);

function an_register_auth0_service()
{
    $custom_auth0_controller = new customAuth0_API_Controller();
    $custom_auth0_controller->register_routes();
}


class customAuth0_API_Controller extends WP_REST_Controller
{
    protected $base = "an/auth0";
    public function register_routes()
    {
        register_rest_route(
            $this->base,
            '/login',
            array(
                'methods' => 'POST',
                'callback' => array($this, 'an_custom_auth0_login'),
                'permission_callback' => '__return_true',
            )
        );
    }

    public function an_custom_auth0_login($request)
    {
        if (class_exists('anCustomAuth0API')) {
            $myAPI = new anCustomAuth0API();
            return $myAPI->an_custom_auth0_login($request);
        }
        return new WP_REST_Response(array('status' => -1, 'message' => 'Success', 'data' => "No route was found matching this URL"), 200);
    }

    public function check_permissions()
    {
        if (!is_user_logged_in()) {
            return new WP_Error('rest_not_logged_in', esc_html__('You are not currently logged in.'), array('status' => 401));
        }
        return true;
    }
}

if (!class_exists('anCustomAuth0API')) {

    class anCustomAuth0API
    {
        public function __construct()
        {
        }

        public function an_custom_auth0_login($request)
        {
            $token = $request->get_param('token');
            if (!$token) {
                error_log('Token is required');
                return new WP_REST_Response(array('error' => 'Token is required'), 400);
            }

            $response = wp_remote_get('https://dev-r68c567whjkd1mbi.us.auth0.com/.well-known/jwks.json');
            if (is_wp_error($response)) {
                error_log('Failed to retrieve keys');
                return new WP_REST_Response(array('error' => 'Failed to retrieve keys'), 500);
            }

            $keys = json_decode(wp_remote_retrieve_body($response), true);
            $decoded_token = null;
            foreach ($keys['keys'] as $key) {
                if ($key['alg'] == 'RS256') {
                    try {
                        $decoded_token = JWT::decode($token, JWK::parseKeySet($keys), array('RS256'));
                        break;
                    } catch (Exception $e) {
                        continue;
                    }
                }
            }

            if (!$decoded_token) {
                return new WP_REST_Response(array('error' => 'Invalid token'), 401);
            }

            $email = $decoded_token->email;
            $first_name = $decoded_token->given_name ?? '';
            $last_name = $decoded_token->family_name ?? '';
            $location = $decoded_token->location ?? '';
            $role = $decoded_token->role ?? 'Super Admin';
            $contact_number = $decoded_token->contact_number ?? '';
            $company_name = $decoded_token->company_name ?? '';
            $website = $decoded_token->website ?? '';

            $user = get_user_by('email', $email);
            if (!$user) {
                $userdata = array(
                    'user_login'    => $email,
                    'user_email'    => $email,
                    'user_pass'     => wp_generate_password(),
                    'first_name'    => $first_name,
                    'last_name'     => $last_name,
                    'role'          => $role
                );
                $user_id = wp_insert_user($userdata);
                if (is_wp_error($user_id)) {
                    return new WP_REST_Response(array('error' => 'Failed to create user'), 500);
                }

                // Add user meta data
                update_user_meta($user_id, 'location', $location);
                update_user_meta($user_id, 'contact_number', $contact_number);
                update_user_meta($user_id, 'company_name', $company_name);
                update_user_meta($user_id, 'website', $website);

                $user = get_user_by('id', $user_id);
            }

            try {
                $jwt_token = JWT::encode(array('data' => array('user' => $user->ID)), JWT_AUTH_SECRET_KEY, 'HS256');
            } catch (Exception $e) {
                error_log('JWT encoding failed: ' . $e->getMessage());
                return new WP_REST_Response(array('error' => 'JWT encoding failed', 'message' => $e->getMessage()), 500);
            }

            return new WP_REST_Response(array('token' => $jwt_token));
        }
    }
}
