// src/composables/useSeo.ts
import { useSeoMeta } from '#imports'
import { appConfig } from '~/config/app'

interface SeoOptions {
	title?: string
	description?: string
	image?: string
	url?: string
	type?:
		| 'article'
		| 'website'
		| 'book'
		| 'profile'
		| 'music.song'
		| 'music.album'
		| 'music.playlist'
		| 'music.radio_status'
		| 'video.movie'
		| 'video.episode'
		| 'video.tv_show'
		| 'video.other'
}

export function useSeo(options: SeoOptions = {}) {
	const { title, description, image, url, type = 'website' } = options

	// Build full title with app name
	const fullTitle = title
		? `${title}${appConfig.seo.separator}${appConfig.seo.defaultTitle}`
		: appConfig.seo.defaultTitle

	// Use provided description or default
	const fullDescription = description || appConfig.seo.defaultDescription

	// Use provided image or default
	const fullImage = image || appConfig.seo.defaultImage

	// Use provided URL or default
	const fullUrl = url || appConfig.seo.defaultUrl

	useSeoMeta({
		title: fullTitle,
		description: fullDescription,
		ogTitle: fullTitle,
		ogDescription: fullDescription,
		ogImage: fullImage,
		ogUrl: fullUrl,
		ogType: type,
		twitterTitle: fullTitle,
		twitterDescription: fullDescription,
		twitterImage: fullImage,
		twitterCard: 'summary_large_image',
	})
}
