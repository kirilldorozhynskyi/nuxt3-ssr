<template>
	<div class="flex items-center justify-center py-12">
		<div
			class="border-sport-600 h-12 w-12 animate-spin rounded-full border-b-2"
		></div>
		<span v-if="text" class="ml-3 text-gray-600">{{ text }}</span>
	</div>
</template>

<script setup lang="ts">
	interface Props {
		text?: string
	}

	withDefaults(defineProps<Props>(), {
		text: '',
	})
</script>
