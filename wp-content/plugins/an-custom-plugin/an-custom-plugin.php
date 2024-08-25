<?php
/*
Plugin Name: AN Endpoints Plugin
Description: Custom REST Endpoints for React Frontend
Version: 1.0
Author: Arijit Nandi
Created on: 2024-08-25 16:35:47
*/

include_once(plugin_dir_path(__FILE__) . 'url-config.php');
include_once(plugin_dir_path(__FILE__) . 'functions.php');
require_once(plugin_dir_path(__FILE__) . 'curl-requests.php');
require_once(plugin_dir_path(__FILE__) . 'url_dependencies.php');

// Activation hook
register_activation_hook(__FILE__, 'an_endpoints_activation');
// add_filter('xmlrpc_enabled', '__return_false');

function an_endpoints_activation()
{
    // Perform activation tasks if needed
    // Example: create database tables, set default options, etc.
}

// Deactivation hook
register_deactivation_hook(__FILE__, 'an_endpoints_deactivation');

function an_endpoints_deactivation()
{
    // Perform deactivation tasks if needed
    // Example: clean up temporary data, etc.
}

