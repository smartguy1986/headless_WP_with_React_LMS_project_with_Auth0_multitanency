<?php
// curl-requests.php

if (!class_exists('CustomCurlRequests')) {
    class CustomCurlRequests
    {
        public static function makeRequest($url, $method = 'GET', $custom_headers = array(), $body = null, $bearer = null, $options = array())
        {
            $ch = curl_init();

            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method); // Set the request method

            $headers[] = 'Content-Type: application/json';
            $headers[] = 'Accept: */*';

            // Set the request body for POST or other methods
            if ($body !== null) {
                // Ensure the body is a JSON string
                if (is_array($body)) {
                    $body = json_encode($body);
                }
                curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
            }
            
            // Set headers
            if (!empty($custom_headers)) {
                $headers[] = $custom_headers;
            }

            if($bearer):
                $headers[] = "Authorization: Bearer $bearer";
            endif;

            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
            
            // Set any additional options
            if (!empty($options)) {
                foreach ($options as $option => $value) {
                    curl_setopt($ch, $option, $value);
                }
            }

            $response = curl_exec($ch);

            if ($response === false) {
                // cURL request failed
                $error = curl_error($ch);
                curl_close($ch);
                return new WP_Error('curl_error', $error);
            }

            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

            curl_close($ch);

            $decodedResponse = json_decode($response, true);

            if (json_last_error() !== JSON_ERROR_NONE) {
                // JSON decoding error
                return new WP_Error('json_error', 'Error decoding JSON response: ' . json_last_error_msg());
            }

            if ($httpCode >= 400) {
                // Log the error details for debugging
                error_log('HTTP error ' . $httpCode . ': ' . print_r($decodedResponse, true));

                // Return the detailed error response
                return new WP_Error('http_error', "HTTP error: $httpCode", $decodedResponse);
            }

            return $decodedResponse;
        }
    }
}
