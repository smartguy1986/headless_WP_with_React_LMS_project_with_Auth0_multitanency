<?php
if (!defined('ABSPATH'))
    exit;

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
                // 'permission_callback' => array($this, 'check_permissions'),
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

        public function an_custom_auth0_login(WP_REST_Request $request)
        {
            $token = $request->get_param('token');
            $response = wp_remote_get('https://dev-r68c567whjkd1mbi.us.auth0.com/.well-known/jwks.json');
            $keys = json_decode(wp_remote_retrieve_body($response), true);
            $decoded_token = JWT::decode($token, $keys, array('RS256'));

            // Add user to WordPress or get existing user by email
            $user = get_user_by('email', $decoded_token->email);
            if (!$user) {
                // Create user
                $user_id = wp_insert_user(array(
                    'user_login' => $decoded_token->email,
                    'user_email' => $decoded_token->email,
                    'user_pass' => wp_generate_password(),
                ));
                $user = get_user_by('id', $user_id);
            }

            // Generate JWT for WordPress
            $jwt_token = JWT::encode(array('data' => array('user' => $user->ID)), JWT_AUTH_SECRET_KEY);

            return new WP_REST_Response(array('token' => $jwt_token));
        }
    }
}
