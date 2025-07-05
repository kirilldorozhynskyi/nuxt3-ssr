<script setup lang="ts">
	import { useSeo } from '~/composables/useSeo'
	import type { Product } from '~/types'

	useSeo({
		title: 'Products',
		description: 'Browse our collection of products with server-side rendering',
	})
	// Fetch products data
	const { fetchProducts } = useApi()
	const {
		data: products,
		pending,
		error,
	} = await useAsyncData('products', async () => {
		const response = await fetchProducts(10, 0)
		return response.products
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
