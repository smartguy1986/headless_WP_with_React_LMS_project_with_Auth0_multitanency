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
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);

            $headers = array(
                'Content-Type: application/json',
                'Accept: application/json'
            );

            // Set the request body for POST or other methods
            if ($body !== null) {
                if (is_array($body)) {
                    $body = json_encode($body);
                }
                curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
            }

            // Set custom headers
            if (!empty($custom_headers)) {
                $headers = array_merge($headers, $custom_headers);
            }

            // Set Authorization header if bearer token is provided
            if ($bearer) {
                $headers[] = "Authorization: Bearer $bearer";
            }

            curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

            // Set any additional options
            if (!empty($options)) {
                foreach ($options as $option => $value) {
                    curl_setopt($ch, $option, $value);
                }
            }

            $response = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

            if ($response === false) {
                $error = curl_error($ch);
                curl_close($ch);
                return new WP_Error('curl_error', json_encode(['error' => $error]));
            }

            curl_close($ch);

            // Decode the response
            $decodedResponse = json_decode($response, true);

            // Handle JSON decode errors
            if (json_last_error() !== JSON_ERROR_NONE) {
                return new WP_Error('json_error', json_encode(['error' => 'Error decoding JSON response: ' . json_last_error_msg()]));
            }

            // Check if the HTTP status code indicates an error
            if ($httpCode >= 400) {
                return new WP_Error('http_error', json_encode(['error' => "HTTP error: $httpCode", 'response' => $decodedResponse]));
            }

            // Return the decoded response as JSON
            return $decodedResponse;
        }
    }
}
