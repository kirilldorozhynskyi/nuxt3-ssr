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
		title: 'Products',
		description: 'Browse our collection of products with server-side rendering',
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
		<CommonLoadingSpinner v-if="pending" text="Loading products..." />

		<!-- Error State -->
		<CommonErrorMessage
			v-else-if="error"
			title="Error Loading Products"
			:message="error.message"
		/>

		<!-- Products Grid -->
		<div v-else class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			<ProductCard
				v-for="product in products"
				:key="product.id"
				:product="product"
			/>
		</div>
	</div>
</template>
