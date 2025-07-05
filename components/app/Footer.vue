<template>
	<footer class="mt-auto bg-gray-800 py-8 text-white">
		<div class="container mx-auto px-4 text-center">
			<p class="text-gray-300">
				&copy; {{ new Date().getFullYear() }} {{ appConfig.name }}. Built with
				Nuxt 3 & Tailwind CSS v4.
			</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
	import { appConfig } from '~/config/app'
</script>
