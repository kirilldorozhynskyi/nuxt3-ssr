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
		<PwaInstall />

		<!-- Online Status -->
		<OnlineStatus />
	</div>
</template>

<script setup lang="ts">
	const { initPwa } = usePwa()

	// Initialize PWA functionality
	onMounted(() => {
		initPwa()
	})
</script>
