<?php
if (!defined('ABSPATH'))
    exit;

add_action('rest_api_init', 'an_register_rest_weather_service', 20);

function an_register_rest_weather_service()
{
    $custom_weather_controller = new customWeather_API_Controller();
    $custom_weather_controller->register_routes();
}


class customWeather_API_Controller extends WP_REST_Controller
{
    protected $base = "an/general";
    public function register_routes()
    {
        register_rest_route(
            $this->base,
            '/getweather',
            array(
                'methods' => 'GET',
                'callback' => array($this, 'an_weather_service_get_current_weather'),
                // 'permission_callback' => '__return_true',
            )
        );
    }

    public function an_weather_service_get_current_weather($request)
    {
        if (class_exists('anCustomWeatherAPI')) {
            $myAPI = new anCustomWeatherAPI();
            return $myAPI->an_weather_service_get_current_weather($request);
        }
        return new WP_REST_Response(array('status' => -1, 'message' => 'Success', 'data' => "No route was found matching this URL"), 200);
    }

    public function check_permissions()
    {
        if (!is_user_logged_in()) {
            return new WP_Error('rest_not_logged_in', esc_html__('You are not currently logged in.'), array('status' => 401));
        }
        return '__return_true';
    }
}

if (!class_exists('anCustomWeatherAPI')) {

    class anCustomWeatherAPI
    {
        public function __construct()
        {
            // Add any initialization logic here
        }

        public function an_weather_service_get_current_weather($request)
        {
            $lat = sanitize_text_field($request->get_param('lat'));
            $lon = sanitize_text_field($request->get_param('lon'));
            error_log('abcd====' . $request->get_param('lat'));
            if (empty($lat) || empty($lon)) {
                return new WP_REST_Response(
                    array('status' => -1, 'message' => 'Latitude and Longitude are required.'),
                    400
                );
            }

            $transient_key = 'weather_data_' . md5($lat . $lon);

            // Check if the data is already cached
            $cached_data = get_transient($transient_key);

            if ($cached_data) {
                // If cached data exists, return it
                $cached_data->is_cached = true;
                return new WP_REST_Response(
                    array('status' => 0, 'message' => 'Success', 'data' => $cached_data),
                    200
                );
            }

            // If no cached data, fetch from the API
            $url = WEATHER_APP_API_URL . '?lat=' . $lat . '&lon=' . $lon . '&appid=' . WEATHER_APP_API_KEY . '&units=metric';

            $response = CustomCurlRequests::makeRequest($url, 'GET', [], null, []);

            if ($response && !is_wp_error($response)) {
                // Cache the data for 2 hours
                set_transient($transient_key, $response, 10000 * HOUR_IN_SECONDS);

                return new WP_REST_Response(
                    array('status' => 0, 'message' => 'Success', 'data' => $response),
                    200
                );
            }

            return new WP_REST_Response(array('status' => -1, 'message' => 'Error', 'data' => $response), 400);
        }
    }
}
