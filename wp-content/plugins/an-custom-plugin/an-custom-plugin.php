<?php
/*
Plugin Name: AN Endpoints Plugin
Description: Custom REST Endpoints for React Frontend
Version: 1.0
Author: Arijit Nandi
Created on: 2024-05-24 17:18:03
*/

include_once(plugin_dir_path(__FILE__) . 'url-config.php');
require_once(plugin_dir_path(__FILE__) . 'curl-requests.php');
require_once(plugin_dir_path(__FILE__) . 'url_dependencies.php');

// Activation hook
register_activation_hook(__FILE__, 'an_endpoints_activation');

function an_endpoints_activation() {
    // Perform activation tasks if needed
    // Example: create database tables, set default options, etc.
}

// Deactivation hook
register_deactivation_hook(__FILE__, 'an_endpoints_deactivation');

function an_endpoints_deactivation() {
    // Perform deactivation tasks if needed
    // Example: clean up temporary data, etc.
}
