<template>
	<div class="flex min-h-screen flex-col bg-gray-50">
		<!-- Header -->
		<AppHeader />

		<!-- Main Content -->
		<main class="container mx-auto px-4 py-8">
			<NuxtPage />
		</main>

		<!-- Footer -->
		<AppFooter class="mt-auto" />

		<!-- PWA Install Prompt -->
		<CommonPwaInstall />

		<!-- Online Status -->
		<CommonOnlineStatus />
	</div>
</template>

<script setup lang="ts">
	const { initPwa } = usePwa()

	// Initialize PWA functionality only on client
	onMounted(() => {
		if (import.meta.client) {
			initPwa()
		}
	})
</script>
