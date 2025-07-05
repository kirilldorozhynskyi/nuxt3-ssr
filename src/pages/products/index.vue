<script setup lang="ts">
	import { useSeo } from '~/composables/useSeo'

	// Define product type
	interface Product {
		id: number
		title: string
		description: string
		price: number
		thumbnail: string
		rating: number
		stock: number
	}

	useSeo({
		title: 'Home - Sport Video PWA',
		description:
			'Welcome to Sport Video PWA - Modern Nuxt 3 application with SSR support',
		image: '/cover.png', // если есть
		url: 'https://your-domain.com/',
	})
	// Fetch products data
	const {
		data: products,
		pending,
		error,
	} = await useAsyncData('products', async () => {
		const data = await $fetch<{ products: Product[] }>(
			'https://dummyjson.com/products?limit=10'
		)
		return data.products
	})
</script>

<template>
	<div>
		<!-- Page Header -->
		<div class="mb-8">
			<h2 class="mb-2 text-3xl font-bold text-gray-900">Products (SSR)</h2>
			<p class="text-gray-600">
				Browse our collection of products with server-side rendering
			</p>
		</div>

		<!-- Loading State -->
		<div v-if="pending" class="flex items-center justify-center py-12">
			<div
				class="border-sport-600 h-12 w-12 animate-spin rounded-full border-b-2"
			/>
			<span class="ml-3 text-gray-600">Loading products...</span>
		</div>

		<!-- Error State -->
		<div
			v-else-if="error"
			class="rounded-lg border border-red-200 bg-red-50 p-6 text-center"
		>
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
				Error Loading Products
			</h3>
			<p class="text-red-600">{{ error.message }}</p>
		</div>

		<!-- Products Grid -->
		<div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			<div
				v-for="product in products"
				:key="product.id"
				class="transform rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
			>
				<div
					class="aspect-w-16 aspect-h-9 overflow-hidden rounded-t-xl bg-gray-200"
				>
					<NuxtImg
						:src="product.thumbnail"
						:alt="product.title"
						class="h-48 w-full object-cover"
					/>
				</div>
				<div class="p-6">
					<h3 class="mb-2 line-clamp-2 text-lg font-semibold text-gray-900">
						{{ product.title }}
					</h3>
					<p class="mb-4 line-clamp-3 text-sm text-gray-600">
						{{ product.description }}
					</p>
					<div class="flex items-center justify-between">
						<span class="text-sport-600 text-2xl font-bold"
							>${{ product.price }}</span
						>
						<NuxtLink
							:to="`/products/${product.id}`"
							class="bg-sport-600 hover:bg-sport-700 inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors duration-200"
						>
							View Details
							<svg
								class="ml-1 h-4 w-4"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9 5l7 7-7 7"
								/>
							</svg>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
