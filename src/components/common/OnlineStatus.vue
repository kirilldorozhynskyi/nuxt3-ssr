<template>
	<div
		v-if="!isOnline"
		class="fixed top-4 right-4 z-50 rounded-lg bg-red-500 px-4 py-2 text-white shadow-lg"
	>
		<div class="flex items-center space-x-2">
			<svg
				class="h-5 w-5"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
				/>
			</svg>
			<span class="text-sm font-medium">You are offline</span>
		</div>
	</div>
</template>

<script setup lang="ts">
	const { isOnline } = usePwa()
</script>
