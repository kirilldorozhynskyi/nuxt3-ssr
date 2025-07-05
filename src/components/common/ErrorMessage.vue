<template>
	<div class="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
		<svg
			class="mx-auto mb-4 h-12 w-12 text-red-400"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
		<h3 class="mb-2 text-lg font-semibold text-red-800">
			{{ title }}
		</h3>
		<p class="text-red-600">{{ message }}</p>
	</div>
</template>

<script setup lang="ts">
	interface Props {
		title: string
		message: string
	}

	defineProps<Props>()
</script>
