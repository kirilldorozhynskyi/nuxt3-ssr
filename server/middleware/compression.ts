import { defineEventHandler, getHeader, setHeader } from 'h3'

export default defineEventHandler(async event => {
	// Skip compression for certain content types
	const contentType = getHeader(event, 'content-type') || ''
	const contentLength = getHeader(event, 'content-length')

	// Don't compress if content is too small or already compressed
	if (!contentLength || parseInt(contentLength) < 1024) {
		return
	}

	// Skip compression for already compressed content types
	if (
		contentType.includes('image/') ||
		contentType.includes('video/') ||
		contentType.includes('audio/') ||
		contentType.includes('application/zip') ||
		contentType.includes('application/gzip')
	) {
		return
	}

	// Check if client supports compression
	const acceptEncoding = getHeader(event, 'accept-encoding') || ''

	if (acceptEncoding.includes('br')) {
		// Prefer Brotli compression
		setHeader(event, 'content-encoding', 'br')
		setHeader(event, 'vary', 'Accept-Encoding')
	} else if (acceptEncoding.includes('gzip')) {
		// Fallback to gzip compression
		setHeader(event, 'content-encoding', 'gzip')
		setHeader(event, 'vary', 'Accept-Encoding')
	}
})
