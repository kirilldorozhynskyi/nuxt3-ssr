// Global application configuration
const baseUrl = 'https://sport-video.com'
const baseName = 'Nuxt 3 PWA'

export const appConfig = {
	// Application name
	name: baseName,

	// Application description
	description: 'Modern Nuxt 3 application with SSR support and Tailwind CSS v4',

	// Base URL for the application
	baseUrl,

	// Default SEO settings
	seo: {
		defaultTitle: baseName,
		defaultDescription:
			'Modern Nuxt 3 application with SSR support and Tailwind CSS v4',
		defaultImage: '/cover.png',
		defaultUrl: baseUrl,
		separator: ' | ',
	},

	// // Social media
	// social: {
	// 	twitter: '@sportvideo',
	// 	facebook: 'sportvideo',
	// },

	// // Contact information
	// contact: {
	// 	email: 'info@sport-video.com',
	// 	phone: '+1 (555) 123-4567',
	// },
} as const
