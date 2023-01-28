<?php
/**
 * Setup plugin assets
 *
 * @package WPS_Iubenda_Kit
 */

declare( strict_types=1 );

namespace WPS\IubendaKit\Inc\Assets;

if ( ! defined( 'ABSPATH' ) ) {
	die( 'Silence is golden.' );
}

add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\\front_end_assets' );

/**
 * Enqueue scripts and styles for the client.
 */
function front_end_assets() {
	$script_deps_path    = WPS_IUBENDA_KIT_DIR_PATH . '/build/wps-iubenda-kit.asset.php';
	$script_dependencies = file_exists( $script_deps_path ) ?
		include $script_deps_path :
		[
			'dependencies' => [],
			'version'      => WPS_IUBENDA_KIT_VERSION,
		];

	if ( file_exists( WPS_IUBENDA_KIT_DIR_PATH . '/build/wps-iubenda-kit.js' ) ) {
		wp_register_script(
			'wps-iubenda-kit',
			WPS_IUBENDA_KIT_DIR_URL . '/build/wps-iubenda-kit.js',
			$script_dependencies['dependencies'],
			$script_dependencies['version'],
			true
		);
		wp_enqueue_script( 'wps-iubenda-kit' );
	}

	if ( file_exists( WPS_IUBENDA_KIT_DIR_PATH . '/build/wps-iubenda-kit.css' ) ) {
		wp_register_style(
			'wps-iubenda-kit',
			WPS_IUBENDA_KIT_DIR_URL . '/build/wps-iubenda-kit.css',
			[],
			$script_dependencies['version']
		);
		wp_enqueue_style( 'wps-iubenda-kit' );
	}
}
