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

	// Nitro configuration for better performance
	nitro: {
		compressPublicAssets: true,
		minify: true,
		// Enable compression
		routeRules: {
			'/**': { headers: { 'cache-control': 'public, max-age=31536000' } },
		},
	},

	// PWA options
	pwa: {
		registerType: 'autoUpdate',
		manifest: {
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
		},
		workbox: {
			globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
		},
		injectManifest: {
			globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
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
			navigateFallback: '/',
			navigateFallbackAllowlist: [/^\/$/],
			type: 'module',
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
