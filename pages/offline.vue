<template>
	<div>
		<!-- Hero Section -->
		<div class="mb-12 text-center">
			<h2 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
				No Internet Connection
			</h2>
			<p class="mb-8 text-lg text-gray-600">
				Please check your internet connection and try again
			</p>
		</div>

		<!-- CTA Button -->
		<div class="text-center">
			<button
				class="from-sport-600 to-sport-700 hover:from-sport-700 hover:to-sport-800 inline-flex transform items-center rounded-lg bg-gradient-to-r px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105"
				@click="reloadPage"
			>
				Refresh Page
				<svg
					class="ml-2 h-5 w-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>

<script setup>
	const reloadPage = () => {
		if (import.meta.client) {
			window.location.reload()
		}
	}
</script>
