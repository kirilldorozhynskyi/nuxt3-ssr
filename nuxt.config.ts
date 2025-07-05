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

	// PWA configuration
	pwa: {
		registerType: 'autoUpdate',
		workbox: {
			navigateFallback: '/',
			globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
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
			short_name: 'SportVideo',
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
	},
})
