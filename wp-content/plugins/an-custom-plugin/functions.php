<?php
function allow_my_custom_origins($headers)
{
    $headers['Access-Control-Allow-Origin'] = 'https://127.0.0.1'; // Change this to your React app domain
    $headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE';
    $headers['Access-Control-Allow-Credentials'] = 'true';
    // $headers['Content-Type'] = 'application/json';
    return $headers;
}

add_filter('rest_api_init', function () {
    remove_filter('rest_pre_serve_request', 'rest_send_cors_headers');
    add_filter('rest_pre_serve_request', 'allow_my_custom_origins');
}, 15);

add_action("create_custom_user_in_wp", "create_custom_user_in_wp_function", 10, 8);

// Custom logging function
function custom_api_log($message)
{
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

function generateUniqueId($prefix = 'D', $year = null)
{
    // Default to the current year if not provided
    if ($year === null) {
        $year = date('Y');
    }

    $prefix = strtoupper(substr($prefix, 0, 1));
    // Generate a random alphanumeric string of 8 characters
    $randomString = generateRandomString(8);

    // Combine the prefix, year, and random string to form the unique ID
    $uniqueId = sprintf('%s-%s-%s', $prefix, $year, $randomString);

    return $uniqueId;
}

function generateRandomString($length = 8)
{
    // Define the characters to be used in the random string
    $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';

    // Generate the random string
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }

    return $randomString;
}


function create_custom_user_in_wp_function($email, $firstname, $lastname, $password, $account_id, $created_at, $auth0user_id, $roles)
{
    // Sanitize input fields
    $email = sanitize_email($email);
    $firstname = sanitize_text_field($firstname);
    $lastname = sanitize_text_field($lastname);
    $password = sanitize_text_field($password);
    $account_id = sanitize_text_field($account_id);
    $created_at = sanitize_text_field($created_at);
    $auth0user_id = sanitize_text_field($auth0user_id);
    $roles = sanitize_text_field($roles);

    // Check if email already exists
    if (email_exists($email)) {
        return array('status' => 'error', 'message' => 'User already exists.');
    }

    switch_to_blog(1);
    // Attempt to create the user
    $user_id = wp_create_user($email, $password, $email);

    // Check if there was an error during user creation
    if (is_wp_error($user_id)) {
        $config = require __DIR__ . '/auth0Config.php'; // Corrected the path
        $authOps = new anCustomAuth0API($config);

        // Log the error message for debugging
        error_log('WP_Error: ' . $user_id->get_error_message());
        capture_log_data('WP Error', $user_id->get_error_message());
        // Remove the custom Auth0 user
        $authOps->an_custom_auth0_remove_user(urlencode($auth0user_id));

        // Return the error message
        return array('status' => 'error', 'message' => $user_id->get_error_message());
    }

    // Update user information
    $user_update = wp_update_user(array(
        'ID' => $user_id,
        'first_name' => $firstname,
        'last_name' => $lastname,
        'role' => $roles,
    ));

    // Check if there was an error during user update
    if (is_wp_error($user_update)) {
        // Log the error message for debugging
        error_log('WP_Error during user update: ' . $user_update->get_error_message());
        capture_log_data('WP_Error during user update', $user_update->get_error_message());
        // Return the error message
        return json_encode(array('status' => 'error', 'message' => $user_update->get_error_message()));
    }

    // Update user meta data
    update_user_meta($user_id, 'account_id', $account_id);
    update_user_meta($user_id, 'created_at', $created_at);
    update_user_meta($user_id, 'auth0user_id', $auth0user_id);

    // Generate and add a unique profile ID
    $profile_id = generate_unique_profile_id();
    add_user_meta($user_id, 'profile_id', sanitize_text_field($profile_id));

    // Return success response
    return array('status' => 'success', 'message' => 'User created successfully.', 'user_id' => $user_id, 'profile_id' => $profile_id);
}


function generate_unique_profile_id()
{
    $letters = 'abcdefghijklmnopqrstuvwxyz';
    $numbers = '0123456789';
    $small_letters = substr(str_shuffle(strtolower($letters)), 0, 6);
    $capital_letters = strtoupper(substr(str_shuffle($numbers . $letters), 0, 16));
    $numbers_part = substr(str_shuffle($numbers . $letters), 0, 10);

    return $small_letters . $capital_letters . $numbers_part;
}

function capture_log_data($error_title, $error_message)
{
    global $wpdb;

    $log_data = array(
        "error_title" => $error_title,
        "error_message" => $error_message
    );

    $table_name = $wpdb->prefix . 'error_logs';

    $wpdb->insert(
        $table_name,
        $log_data,
        array('%s', '%s') // Data formats for each field
    );
}
