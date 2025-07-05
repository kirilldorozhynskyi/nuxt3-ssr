// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/image'],

	// Source directory configuration
	srcDir: 'src',

	// CSS configuration
	css: ['~/styles/app.css'],

	vite: {
		plugins: [tailwindcss()],
	},
})
