<?php

// Define constants for file paths
define('AN_ENDPOINTS_PLUGIN_DIR', plugin_dir_path(__FILE__));
define('AN_ENDPOINTS_PLUGIN_URL', plugin_dir_url(__FILE__));

// Load dependencies
foreach (glob(AN_ENDPOINTS_PLUGIN_DIR . 'includes/images/*.php') as $file) {
    require_once $file;
}
foreach (glob(AN_ENDPOINTS_PLUGIN_DIR . 'includes/general/*.php') as $file) {
    require_once $file;
}
foreach (glob(AN_ENDPOINTS_PLUGIN_DIR . 'includes/posts/*.php') as $file) {
    require_once $file;
}
foreach (glob(AN_ENDPOINTS_PLUGIN_DIR . 'includes/customer/*.php') as $file) {
    require_once $file;
}

?>