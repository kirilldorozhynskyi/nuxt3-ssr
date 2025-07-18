// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import { appConfig } from './config/app'

export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/image', '@vite-pwa/nuxt'],

	// CSS configuration
	css: ['~/styles/app.css'],

	// Performance optimization
	experimental: {
		payloadExtraction: false,
	},

	// Build optimization
	build: {
		// Disable automatic preloading in production
		transpile: [],
	},

	// App configuration
	app: {
		head: {
			htmlAttrs: {
				lang: 'en',
			},
		},
	},

	// Nitro configuration for better performance and compression
	nitro: {
		compressPublicAssets: { gzip: true, brotli: true },
		minify: true,
		inlineDynamicImports: true,
		// Route rules with compression headers
		routeRules: {
			'/**': {
				headers: {
					'cache-control': 'public, max-age=31536000',
					vary: 'Accept-Encoding',
				},
			},
			// Specific rules for different content types
			'/**/*.js': {
				headers: {
					'content-type': 'application/javascript; charset=utf-8',
					'cache-control': 'public, max-age=31536000',
					vary: 'Accept-Encoding',
				},
			},
			'/**/*.css': {
				headers: {
					'content-type': 'text/css; charset=utf-8',
					'cache-control': 'public, max-age=31536000',
					vary: 'Accept-Encoding',
				},
			},
			'/**/*.{png,jpg,jpeg,gif,svg,ico,webp}': {
				headers: {
					'cache-control': 'public, max-age=31536000',
					vary: 'Accept-Encoding',
				},
			},
		},
	},

	// PWA options
	pwa: {
		registerType: 'autoUpdate',
		manifest: {
			id: '/',
			name: appConfig.name,
			short_name: appConfig.name,
			theme_color: '#ffffff',
			screenshots: [
				{
					src: 'screenshot-wide.png',
					sizes: '1280x720',
					type: 'image/png',
					form_factor: 'wide',
				},
				{
					src: 'screenshot-mobile.png',
					sizes: '600x800',
					type: 'image/png',
				},
			],
			icons: [
				{
					src: 'pwa-192x192.png',
					sizes: '192x192',
					type: 'image/png',
				},
				{
					src: 'pwa-512x512.png',
					sizes: '512x512',
					type: 'image/png',
				},
				{
					src: 'pwa-maskable-192x192.png',
					sizes: '192x192',
					type: 'image/png',
					purpose: 'maskable',
				},
			],
			shortcuts: [
				{
					name: 'Offline',
					url: '/offline',
					description: 'Offline page',
				},
			],
		},
		workbox: {
			globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
		},
		injectManifest: {
			globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
			swSrc: 'sw.js',
		},
		client: {
			installPrompt: true,
			// you don't need to include this: only for testing purposes
			// if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
			periodicSyncForUpdates: 20,
		},

		devOptions: {
			enabled: true,
			suppressWarnings: true,

			navigateFallbackAllowlist: [/^\/$/],
			type: 'module',
		},
	},

	vite: {
		esbuild: {
			drop:
				process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
		},
		plugins: [tailwindcss()],
		build: {
			rollupOptions: {
				output: {
					manualChunks: {
						vendor: ['vue', 'vue-router'],
					},
				},
			},
		},
		optimizeDeps: {
			include: ['vue', 'vue-router'],
		},
		// Enable compression for development server
		server: {
			headers: {
				vary: 'Accept-Encoding',
			},
		},
	},
})
