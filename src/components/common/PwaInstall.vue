<template>
	<ClientOnly>
		<div v-if="showInstallPrompt" class="fixed right-4 bottom-4 z-50">
			<div
				class="max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-lg"
			>
				<div class="flex items-start space-x-3">
					<div class="flex-shrink-0">
						<svg
							class="text-sport-600 h-8 w-8"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
							/>
						</svg>
					</div>
					<div class="min-w-0 flex-1">
						<h3 class="text-sm font-medium text-gray-900">
							Install Sport Video PWA
						</h3>
						<p class="mt-1 text-sm text-gray-500">
							Add this app to your home screen for quick access
						</p>
					</div>
				</div>
				<div class="mt-4 flex space-x-2">
					<button
						@click="installPwa"
						class="bg-sport-600 hover:bg-sport-700 rounded-md px-4 py-2 text-sm font-medium text-white transition-colors duration-200"
					>
						Install
					</button>
					<button
						@click="dismissPrompt"
						class="rounded-md px-4 py-2 text-sm font-medium text-gray-500 transition-colors duration-200 hover:text-gray-700"
					>
						Later
					</button>
				</div>
			</div>
		</div>
	</ClientOnly>
</template>

<script setup lang="ts">
	const { isPwaInstalled, installPwa: installPwaFn } = usePwa()
	const showInstallPrompt = ref(false)
	const deferredPrompt = ref<any>(null)

	// Listen for the beforeinstallprompt event
	onMounted(() => {
		window.addEventListener('beforeinstallprompt', e => {
			e.preventDefault()
			deferredPrompt.value = e
			showInstallPrompt.value = true
		})
	})

	// Install PWA
	const installPwa = async () => {
		const success = await installPwaFn(deferredPrompt.value)
		if (success) {
			showInstallPrompt.value = false
		}
		deferredPrompt.value = null
	}

	// Dismiss prompt
	const dismissPrompt = () => {
		showInstallPrompt.value = false
		deferredPrompt.value = null
	}

	// Don't show prompt if PWA is already installed
	watch(isPwaInstalled, installed => {
		if (installed) {
			showInstallPrompt.value = false
		}
	})
</script>
