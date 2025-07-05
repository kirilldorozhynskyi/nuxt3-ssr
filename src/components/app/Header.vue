<template>
	<header
		class="from-sport-600 to-sport-800 bg-gradient-to-r text-white shadow-lg"
	>
		<div class="container mx-auto px-4 py-6">
			<div class="flex flex-col md:flex-row md:items-center md:justify-between">
				<NuxtLink to="/" class="mb-4 cursor-pointer text-3xl font-bold md:mb-0">
					{{ appConfig.name }}
				</NuxtLink>
				<nav class="flex space-x-6">
					<NuxtLink
						to="/"
						class="hover:text-sport-200 font-medium transition-colors duration-200"
						active-class="text-sport-200 border-b-2 border-sport-200"
					>
						Home
					</NuxtLink>
					<NuxtLink
						to="/products"
						class="hover:text-sport-200 font-medium transition-colors duration-200"
						active-class="text-sport-200 border-b-2 border-sport-200"
					>
						Products
					</NuxtLink>
				</nav>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts">
	import { appConfig } from '~/config/app'
</script>
