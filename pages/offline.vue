<template>
	<div>
		<!-- Hero Section -->
		<div class="mb-12 text-center">
			<h2 class="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
				We are offline
			</h2>
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
