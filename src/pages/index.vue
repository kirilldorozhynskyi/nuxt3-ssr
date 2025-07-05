<template>
	<div>
		<!-- Hero Section -->
		<div class="mb-12 text-center">
			<h2 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
				Welcome to Nuxt 3 SPA!
			</h2>
			<p class="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
				This is a modern Nuxt 3 application with SSR support and server-side
				data loading, built with the latest web technologies for optimal
				performance.
			</p>
		</div>

		<!-- Features Grid -->
		<div class="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
			<div
				class="rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
			>
				<div
					class="bg-sport-100 mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
				>
					<svg
						class="text-sport-600 h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						/>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold text-gray-900">SSR</h3>
				<p class="text-gray-600">
					Server-Side Rendering for optimal SEO and performance
				</p>
			</div>

			<div
				class="rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
			>
				<div
					class="bg-sport-100 mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
				>
					<svg
						class="text-sport-600 h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold text-gray-900">SPA</h3>
				<p class="text-gray-600">
					Single Page Application with smooth navigation
				</p>
			</div>

			<div
				class="rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
			>
				<div
					class="bg-sport-100 mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
				>
					<svg
						class="text-sport-600 h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
						/>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold text-gray-900">
					API Integration
				</h3>
				<p class="text-gray-600">Data loading via DummyJSON API with Axios</p>
			</div>

			<div
				class="rounded-xl bg-white p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
			>
				<div
					class="bg-sport-100 mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
				>
					<svg
						class="text-sport-600 h-6 w-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
						/>
					</svg>
				</div>
				<h3 class="mb-2 text-lg font-semibold text-gray-900">Modern UI</h3>
				<p class="text-gray-600">Beautiful interface with Tailwind CSS v4</p>
			</div>
		</div>

		<!-- CTA Button -->
		<div class="text-center">
			<NuxtLink
				to="/products"
				class="from-sport-600 to-sport-700 hover:from-sport-700 hover:to-sport-800 inline-flex transform items-center rounded-lg bg-gradient-to-r px-8 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105"
			>
				Explore Products
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
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			</NuxtLink>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { useSeo } from '~/composables/useSeo'

	useSeo({
		title: 'Home',
		description: 'Welcome to our modern Nuxt 3 application with SSR support',
	})
</script>
