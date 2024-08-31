<?php
if (!defined('ABSPATH'))
    exit;

add_action('rest_api_init', 'an_register_rest_custom_posts_service', 20);

function an_register_rest_custom_posts_service()
{
    $custom_posts_controller = new customPosts_API_Controller();
    $custom_posts_controller->register_routes();
}


class customPosts_API_Controller extends WP_REST_Controller
{
    protected $base = "an/posts";
    public function register_routes()
    {
        register_rest_route(
            $this->base,
            '/all/(?P<postType>[a-zA-Z0-9]+)',
            array(
                'methods' => 'GET',
                'callback' => array($this, 'an_custom_posts_get_by_type'),
                // 'permission_callback' => array($this, 'check_permissions'),
            )
        );

        register_rest_route(
            $this->base,
            '/test',
            array(
                'methods' => 'GET',
                'callback' => function () {
                    if (is_user_logged_in()) {
                        return new WP_REST_Response(array('status' => 1, 'message' => 'User is logged in'), 200);
                    } else {
                        return new WP_REST_Response(array('status' => 0, 'message' => 'User is not logged in'), 401);
                    }
                },
                'permission_callback' => '__return_true',
            )
        );
    }

    public function an_custom_posts_get_by_type($request)
    {
        if (class_exists('anCustomPostsAPI')) {
            $myAPI = new anCustomPostsAPI();
            return $myAPI->an_custom_posts_get_by_type($request['postType']);
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

if (!class_exists('anCustomPostsAPI')) {

    class anCustomPostsAPI
    {
        public function __construct()
        {
        }

        public function an_custom_posts_get_by_type($postType)
        {
            $posts_per_page = 10;
            $offset = 0;
            if (isset($_GET['page']) && $_GET['page']) :
                $offset = ($_GET['page'] - 1) * $posts_per_page;
            endif;

            $args = array(
                'post_type' => $postType,
                'posts_per_page' => $posts_per_page,
                'offset' => $offset,
            );

            $query = new WP_Query($args);
            $posts_data = [];

            if ($query->have_posts()) {
                while ($query->have_posts()) {
                    $query->the_post();
                    $post_data = get_post(get_the_ID(), ARRAY_A); // Retrieve all post parameters
                    $posts_data[] = $post_data;
                }
                wp_reset_postdata(); // Restore original Post Data
                return new WP_REST_Response(array('status' => 1, 'message' => 'Success!', 'data' => $posts_data), 200);
            } else {
                return new WP_REST_Response(array('status' => 0, 'message' => 'No posts found!'), 400);
            }
        }
    }
}
