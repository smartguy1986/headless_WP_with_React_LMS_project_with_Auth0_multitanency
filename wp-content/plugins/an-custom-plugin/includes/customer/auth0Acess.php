<?php
if (!defined('ABSPATH')) {
    exit;
}

require_once __DIR__ . '../../../../../../vendor/autoload.php';

add_action('rest_api_init', 'an_register_auth0_service', 20);

function an_register_auth0_service()
{
    $config = require __DIR__ . './auth0Config.php';
    $custom_auth0_controller = new customAuth0_API_Controller($config);
    $custom_auth0_controller->register_routes();
}

class customAuth0_API_Controller extends WP_REST_Controller
{
    protected $base = 'an/auth0';
    protected $config;

    public function __construct($config)
    {
        $this->config = $config;
    }

    public function register_routes()
    {
        register_rest_route(
            $this->base,
            '/generate-token',
            array(
                'methods' => 'POST',
                'callback' => array($this, 'an_custom_auth0_token_generate'),
                'permission_callback' => '__return_true',
            )
        );

        register_rest_route(
            $this->base,
            '/createnewuser',
            array(
                'methods' => 'POST',
                'callback' => array($this, 'an_custom_auth0_create_user'),
                'permission_callback' => '__return_true',
            )
        );

        register_rest_route(
            $this->base,
            '/removeauthuser/(?P<userId>.+)',
            array(
                'methods' => 'DELETE',
                'callback' => array($this, 'an_custom_auth0_remove_user'),
                'permission_callback' => '__return_true',
            )
        );
    }

    public function an_custom_auth0_token_generate()
    {
        if (class_exists('anCustomAuth0API')) {
            $myAPI = new anCustomAuth0API($this->config);
            return $myAPI->an_custom_auth0_token_generate();
        }
        return new WP_REST_Response(array('status' => -1, 'message' => 'No route was found matching this URL'), 404);
    }

    public function an_custom_auth0_create_user($request)
    {
        if (class_exists('anCustomAuth0API')) {
            $myAPI = new anCustomAuth0API($this->config);
            return $myAPI->an_custom_auth0_create_user($request->get_json_params());
        }
        return new WP_REST_Response(array('status' => -1, 'message' => 'No route was found matching this URL'), 404);
    }

    public function an_custom_auth0_remove_user($request)
    {
        if (class_exists('anCustomAuth0API')) {
            $myAPI = new anCustomAuth0API($this->config);
            return $myAPI->an_custom_auth0_remove_user($request['userId']);
        }
        return new WP_REST_Response(array('status' => -1, 'message' => 'No route was found matching this URL'), 404);
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
        protected $config;

        public function __construct($config)
        {
            $this->config = $config;
        }

        public function an_custom_auth0_token_generate()
        {
            if (empty($this->config)) {
                return new WP_REST_Response(
                    array('status' => -1, 'message' => 'Auth0 credentials not configured!'),
                    400
                );
            }

            // Check if the access token is already stored in a transient
            $accessToken = get_transient('auth0_access_token');

            // If the access token is not found or expired, generate a new one
            if ($accessToken || !empty($accessToken)) {
                return $accessToken;
            }

            $data = array(
                'client_id' => $this->config['AUTH_CLINET_ID'],
                'client_secret' => $this->config['AUTH_CLIENT_SECRET'],
                'audience' => 'https://' . $this->config['AUTH_DOMAIN'] . '/api/v2/',
                'grant_type' => 'client_credentials'
            );

            $url = 'https://' . $this->config['AUTH_DOMAIN'] . '/oauth/token';

            $response = CustomCurlRequests::makeRequest($url, 'POST', [], $data);
            
            if (empty($response['access_token']) || empty($response['expires_in'])) {
                return new WP_REST_Response(
                    array('status' => -1, 'message' => 'Failed to generate access token!'),
                    400
                );
            }
            $accessToken = $response['access_token'];
            $expiresIn = $response['expires_in'];

            // Store the access token in a transient with an expiry time
            set_transient('auth0_access_token', $accessToken, $expiresIn);

            return $accessToken;

            // return new WP_REST_Response(array('status' => 0, 'message' => 'Success', 'data' => $accessToken), 200);
        }

        public function an_custom_auth0_create_user($post_data)
        {
            if (empty($this->config)) {
                return new WP_REST_Response(
                    array('status' => -1, 'message' => 'Auth0 credentials not configured!'),
                    400
                );
            }

            $accessToken = $this->an_custom_auth0_token_generate();

            $user_data = [
                "email" => $post_data['email'],
                "user_metadata" => [
                    "roles" => "Domain"
                ],
                "blocked" => false,
                "email_verified" => true,
                "app_metadata" => new stdClass(),
                "given_name" => $post_data['firstName'],
                "family_name" => $post_data['lastName'],
                "name" => $post_data['firstName'] . " " . $post_data['lastName'],
                "nickname" => $post_data['firstName'],
                "picture" => "http://example.com/johndoe.jpg",
                "user_id" => generateUniqueId("Domain"),
                "connection" => "Username-Password-Authentication",
                "password" => $post_data['password'],
                "verify_email" => false
            ];

            $url = 'https://' . $this->config['AUTH_DOMAIN'] . '/api/v2/users';

            $response = CustomCurlRequests::makeRequest($url, 'POST', [], $user_data, $accessToken);

            if (!empty($response)) :
                // $email, $firstname, $lastname, $password, $account_id, $created_at, $auth0user_id, $roles
                do_action('create_custom_user_in_wp', $response['email'], $response['given_name'], $response['family_name'], $post_data['password'], $response['identities']->user_id, $response['created_at'], $response['user_id'], $response['user_metadata']['roles']);
                return new WP_REST_Response(array('status' => 0, 'message' => $response), 200);
            else :
                return new WP_REST_Response(array('status' => -1, 'message' => 'Something went wrong!'), 400);
            endif;
        }

        public function an_custom_auth0_remove_user($userId)
        {
            if (empty($this->config)) {
                return new WP_REST_Response(
                    array('status' => -1, 'message' => 'Auth0 credentials not configured!'),
                    400
                );
            }
            $accessToken = $this->an_custom_auth0_token_generate();
            
            $url = 'https://' . $this->config['AUTH_DOMAIN'] . '/api/v2/users/' . $userId;

            $response = CustomCurlRequests::makeRequest($url, 'DELETE', [], null, $accessToken);

            return new WP_REST_Response(array('status' => 0, 'message' => 'Success', 'data' => $response), 200);
        }
    }
}

// function an_custom_auth0_token_generate()
// {
//     $config = require __DIR__ . './auth0Config.php';

//     if (empty($config)) {
//         return new WP_REST_Response(
//             array('status' => -1, 'message' => 'Auth0 credentials not configured!'),
//             400
//         );
//     }

//     $data = array(
//         'client_id' => $config['AUTH_CLINET_ID'],
//         'client_secret' => $config['AUTH_CLIENT_SECRET'],
//         'audience' => 'https://' . $config['AUTH_DOMAIN'] . '/api/v2/',
//         'grant_type' => 'client_credentials'
//     );

//     $url = 'https://' . $config['AUTH_DOMAIN'] . '/oauth/token';

//     $response = CustomCurlRequests::makeRequest($url, 'POST', [], $data);

//     return $response;
// }
