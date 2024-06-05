<?php

// function allow_my_custom_origins( $headers ) {
//     $headers['Access-Control-Allow-Origin'] = 'https://127.0.0.1'; // Change this to your React app domain
//     $headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS, PUT, DELETE';
//     $headers['Access-Control-Allow-Credentials'] = 'true';
//     return $headers;
// }

// add_filter( 'rest_api_init', function() {
//     remove_filter( 'rest_pre_serve_request', 'rest_send_cors_headers' );
//     add_filter( 'rest_pre_serve_request', 'allow_my_custom_origins' );
// }, 15 );


function custom_api_log($message) {
    $date = date('Y-m-d');
    $log_file = WP_CONTENT_DIR . "/logs/api-requests-{$date}.log"; // Log file with current date in the name
    if (!file_exists($log_file)) {
        // Create the log file if it doesn't exist
        touch($log_file);
    }
    // Format the message with a timestamp
    $formatted_message = '[' . date('Y-m-d H:i:s') . '] ' . $message . PHP_EOL;
    // Write the message to the log file
    file_put_contents($log_file, $formatted_message, FILE_APPEND);
}


// Log the request data before the request is dispatched
add_filter('rest_pre_dispatch', function ($result, $server, $request) {
    $method = $request->get_method();
    $route = $request->get_route();
    $params = json_encode($request->get_params());

    $log_message = "API Request: Method: $method, Route: $route, Params: $params";
    custom_api_log($log_message);

    return $result;
}, 10, 3);

// Log the response data after the request is dispatched
add_filter('rest_post_dispatch', function ($response, $server, $request) {
    $status = $response->get_status();
    $data = json_encode($response->get_data());

    $log_message = "API Response: Status: $status, Data: $data";
    custom_api_log($log_message);

    return $response;
}, 10, 3);
