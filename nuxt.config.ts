// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import { appConfig } from './src/config/app'

export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/image', '@vite-pwa/nuxt'],

	// Source directory configuration
	srcDir: 'src',

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
			link: [
				// Disable automatic preloading of unused resources
				{ rel: 'dns-prefetch', href: '//nuxt3-ssr-production.up.railway.app' },
			],
		},
	},

	// Nitro configuration for better performance
	nitro: {
		compressPublicAssets: true,
		minify: true,
		// Enable compression
		routeRules: {
			'/**': { headers: { 'cache-control': 'public, max-age=31536000' } },
		},
	},

	// PWA configuration
	pwa: {
		registerType: 'autoUpdate',
		workbox: {
			navigateFallback: '/',
			globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
			// Optimize caching strategy
			runtimeCaching: [
				{
					urlPattern:
						/^https:\/\/nuxt3-ssr-production\.up\.railway\.app\/_nuxt\/.*/,
					handler: 'CacheFirst',
					options: {
						cacheName: 'nuxt-assets',
						expiration: {
							maxEntries: 50,
							maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
						},
					},
				},
			],
		},
		client: {
			installPrompt: true,
		},
		devOptions: {
			enabled: true,
			suppressWarnings: true,
			type: 'module',
		},
		manifest: {
			name: appConfig.name,
			short_name: appConfig.short_name,
			description: appConfig.description,
			theme_color: '#2563eb',
			background_color: '#f9fafb',
			display: 'standalone',
			orientation: 'portrait',
			scope: '/',
			start_url: '/',
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
					src: 'pwa-512x512.png',
					sizes: '512x512',
					type: 'image/png',
					purpose: 'any maskable',
				},
			],
		},
	},

	vite: {
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
	},
})
