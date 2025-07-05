export default defineNitroPlugin(nitroApp => {
	// Configure compression for Nitro
	nitroApp.hooks.hook('render:response', (response, { event }) => {
		// Only apply to HTML, CSS, JS, and JSON responses
		const contentType = response.headers?.['content-type'] || ''
		const contentLength = response.headers?.['content-length']

		// Skip if content is too small
		if (!contentLength || parseInt(contentLength) < 1024) {
			return
		}

		// Only compress text-based content
		if (
			contentType.includes('text/') ||
			contentType.includes('application/json') ||
			contentType.includes('application/javascript')
		) {
			// Set compression headers
			response.headers = response.headers || {}
			response.headers['vary'] = 'Accept-Encoding'

			// Check client's accept-encoding
			const acceptEncoding = event.node.req.headers['accept-encoding'] || ''

			if (acceptEncoding.includes('br')) {
				response.headers['content-encoding'] = 'br'
			} else if (acceptEncoding.includes('gzip')) {
				response.headers['content-encoding'] = 'gzip'
			}
		}
	})
})
