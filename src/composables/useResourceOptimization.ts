// Resource optimization composable
export const useResourceOptimization = () => {
	// Remove unused preloaded resources
	const cleanupUnusedPreloads = () => {
		if (import.meta.client) {
			// Remove preloaded resources that are not used
			const preloadLinks = document.querySelectorAll('link[rel="preload"]')
			preloadLinks.forEach(link => {
				const href = link.getAttribute('href')
				if (href && href.includes('_nuxt/builds/meta/')) {
					// Check if the resource is actually used
					setTimeout(() => {
						if (!document.querySelector(`script[src="${href}"]`)) {
							link.remove()
						}
					}, 5000) // Wait 5 seconds before removing
				}
			})
		}
	}

	// Optimize resource loading
	const optimizeResourceLoading = () => {
		if (import.meta.client) {
			// Disable automatic preloading for certain resources
			const observer = new PerformanceObserver(list => {
				list.getEntries().forEach(entry => {
					if (entry.name.includes('_nuxt/builds/meta/')) {
						console.log('Resource loaded:', entry.name)
					}
				})
			})

			observer.observe({ entryTypes: ['resource'] })
		}
	}

	// Initialize optimization
	const initOptimization = () => {
		if (import.meta.client) {
			// Clean up after page load
			window.addEventListener('load', () => {
				setTimeout(cleanupUnusedPreloads, 2000)
			})

			// Optimize resource loading
			optimizeResourceLoading()
		}
	}

	return {
		cleanupUnusedPreloads,
		optimizeResourceLoading,
		initOptimization,
	}
}
