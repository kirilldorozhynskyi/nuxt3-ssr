// PWA composable for managing PWA functionality
export const usePwa = () => {
	const isPwaInstalled = ref(false)
	const isPwaSupported = ref(false)
	const isOnline = ref(true)

	// Check if PWA is installed
	const checkPwaInstalled = () => {
		if (import.meta.client) {
			// Check if running in standalone mode (installed PWA)
			isPwaInstalled.value =
				window.matchMedia('(display-mode: standalone)').matches ||
				(window.navigator as any).standalone === true
		}
	}

	// Check if PWA is supported
	const checkPwaSupported = () => {
		if (import.meta.client) {
			isPwaSupported.value =
				'serviceWorker' in navigator && 'PushManager' in window
		}
	}

	// Check online status
	const checkOnlineStatus = () => {
		if (import.meta.client) {
			isOnline.value = navigator.onLine
		}
	}

	// Register service worker
	const registerServiceWorker = async () => {
		if (import.meta.client && 'serviceWorker' in navigator) {
			try {
				const registration = await navigator.serviceWorker.register('/sw.js')
				console.log('Service Worker registered:', registration)
				return registration
			} catch (error) {
				console.error('Service Worker registration failed:', error)
			}
		}
	}

	// Initialize PWA functionality
	const initPwa = () => {
		if (import.meta.client) {
			checkPwaInstalled()
			checkPwaSupported()
			checkOnlineStatus()

			// Listen for online/offline events
			window.addEventListener('online', () => {
				isOnline.value = true
			})
			window.addEventListener('offline', () => {
				isOnline.value = false
			})

			// Listen for display mode changes
			window
				.matchMedia('(display-mode: standalone)')
				.addEventListener('change', e => {
					isPwaInstalled.value = e.matches
				})
		}
	}

	// Install PWA
	const installPwa = async (deferredPrompt: any) => {
		if (!deferredPrompt) return false

		try {
			deferredPrompt.prompt()
			const { outcome } = await deferredPrompt.userChoice

			if (outcome === 'accepted') {
				console.log('PWA installed successfully')
				isPwaInstalled.value = true
				return true
			} else {
				console.log('PWA installation declined')
				return false
			}
		} catch (error) {
			console.error('PWA installation failed:', error)
			return false
		}
	}

	return {
		isPwaInstalled: readonly(isPwaInstalled),
		isPwaSupported: readonly(isPwaSupported),
		isOnline: readonly(isOnline),
		checkPwaInstalled,
		checkPwaSupported,
		checkOnlineStatus,
		registerServiceWorker,
		initPwa,
		installPwa,
	}
}
