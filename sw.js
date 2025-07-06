import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute, NavigationRoute } from 'workbox-routing'
import {
	NetworkFirst,
	CacheFirst,
	StaleWhileRevalidate,
} from 'workbox-strategies'
import { ExpirationPlugin } from 'workbox-expiration'

// Precache all assets
precacheAndRoute(self.__WB_MANIFEST)

// Cache strategy for navigation requests
registerRoute(
	new NavigationRoute(async ({ request }) => {
		try {
			// Try network first
			const response = await fetch(request)
			return response
		} catch {
			// If network fails, redirect to offline page
			return Response.redirect('/offline', 302)
		}
	})
)

// Cache strategy for API requests
registerRoute(
	({ url }) => url.pathname.startsWith('/api/'),
	new NetworkFirst({
		cacheName: 'api-cache',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 50,
				maxAgeSeconds: 5 * 60, // 5 minutes
			}),
		],
	})
)

// Cache strategy for static assets
registerRoute(
	({ request }) =>
		request.destination === 'style' || request.destination === 'script',
	new StaleWhileRevalidate({
		cacheName: 'static-resources',
	})
)

// Cache strategy for images
registerRoute(
	({ request }) => request.destination === 'image',
	new CacheFirst({
		cacheName: 'images',
		plugins: [
			new ExpirationPlugin({
				maxEntries: 60,
				maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
			}),
		],
	})
)
