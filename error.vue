<template>
	<div
		class="flex min-h-screen flex-col items-center justify-center bg-gray-100"
	>
		<h1 class="mb-4 text-5xl font-bold text-red-600">
			{{ error.statusCode === 404 ? '404' : error.statusCode }}
		</h1>
		<h2 class="mb-2 text-2xl font-semibold">
			{{ error.statusCode === 404 ? 'Page Not Found' : error.message }}
		</h2>
		<p class="mb-6 text-gray-600">
			{{
				error.statusCode === 404
					? 'Sorry, the page you are looking for does not exist.'
					: 'An unexpected error has occurred.'
			}}
		</p>

		<NuxtLink to="/" class="text-blue-600 underline">Go to Home</NuxtLink>
	</div>
</template>

<script setup>
	defineProps({
		error: {
			type: Object,
			required: true,
		},
	})
</script>
