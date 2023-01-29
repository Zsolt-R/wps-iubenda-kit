<?php
/**
 * Plugin Name:     WPS Iubenda Kit
 * Plugin URI:      https://wpshapers.com
 * Description:     Extension kit for missing features in Iubenda WordPress Plugin
 * Author:          WPShapers
 * Author URI:      https://wpshapers.com
 * Text Domain:     wps-iubenda-kit
 * Version:         1.0.0
 *
 * @package WPS_Animate
 */

declare( strict_types=1 );

namespace WPS\IubendaKit;

define( 'WPS_IUBENDA_KIT_VERSION', '1.0.2' );
define( 'WPS_IUBENDA_KIT_DIR_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'WPS_IUBENDA_KIT_DIR_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'WPS_IUBENDA_KIT_UPDATE_URL', 'https://zsoltrevay.com/packages' );
define( 'WPS_IUBENDA_KIT_UPDATE_FOLDER', 'wps-iubenda-kit' );
define( 'WPS_IUBENDA_KIT_PLUGIN_SLUG', 'wps-iubenda-kit' );

// Check if Iubenda plugin is active.
if ( ! is_plugin_active( 'iubenda-cookie-law-solution/iubenda_cookie_solution.php' ) ) {
	return;
}

require_once WPS_IUBENDA_KIT_DIR_PATH . '/inc/setup-updater.php';
require_once WPS_IUBENDA_KIT_DIR_PATH . '/inc/setup-assets.php';
