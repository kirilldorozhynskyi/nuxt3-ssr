<template>
	<NuxtImg
		loading="lazy"
		:src="src"
		:alt="alt"
		:class="className"
		:fetchpriority="priority"
		:width="width"
		:height="height"
		@load="onLoad"
		@error="onError"
	/>
</template>

<script setup lang="ts">
	interface Props {
		src: string
		alt: string
		className?: string
		priority?: 'high' | 'low' | 'auto'
		width?: number
		height?: number
	}

	withDefaults(defineProps<Props>(), {
		priority: 'auto',
		className: '',
	})

	const emit = defineEmits<{
		load: [event: string | Event]
		error: [event: string | Event]
	}>()

	const onLoad = (event: string | Event) => {
		emit('load', event)
	}

	const onError = (event: string | Event) => {
		emit('error', event)
	}
</script>
