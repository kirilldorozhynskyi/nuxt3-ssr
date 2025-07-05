// src/composables/useSeo.ts
import { useSeoMeta } from '#imports'

export function useSeo({
	title,
	description,
	image,
	url,
}: {
	title: string
	description: string
	image?: string
	url?: string
	type?: string
}) {
	useSeoMeta({
		title,
		description,
		ogTitle: title,
		ogDescription: description,
		ogImage: image,
		ogUrl: url,
		ogType: 'website',
		twitterTitle: title,
		twitterDescription: description,
		twitterImage: image,
		twitterCard: 'summary_large_image',
	})
}
