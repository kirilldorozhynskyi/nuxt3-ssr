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

	// Get route parameters
	const route = useRoute()
	const id = route.params.id

	// Fetch product data
	const {
		data: product,
		pending,
		error,
	} = await useAsyncData(`product-${id}`, async () => {
		const data = await $fetch<Product>(`https://dummyjson.com/products/${id}`)
		return data
	})

	useSeo({
		title: product.value?.title,
		description: product.value?.description,
	})
</script>

<template>
	<div>
		<!-- Back Button -->
		<div class="mb-6">
			<NuxtLink
				to="/products"
				class="text-sport-600 hover:text-sport-700 inline-flex items-center font-medium transition-colors duration-200"
			>
				<svg
					class="mr-2 h-5 w-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 19l-7-7 7-7"
					/>
				</svg>
				Back to Products
			</NuxtLink>
		</div>

		<!-- Loading State -->
		<div v-if="pending" class="flex items-center justify-center py-12">
			<div
				class="border-sport-600 h-12 w-12 animate-spin rounded-full border-b-2"
			></div>
			<span class="ml-3 text-gray-600">Loading product details...</span>
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
				Error Loading Product
			</h3>
			<p class="text-red-600">{{ error.message }}</p>
		</div>

		<!-- Product Details -->
		<div
			v-else-if="product"
			class="overflow-hidden rounded-xl bg-white shadow-lg"
		>
			<div class="md:flex">
				<!-- Product Image -->
				<div class="md:w-1/2">
					<NuxtImg
						:src="product.thumbnail"
						:alt="product.title"
						class="h-96 w-full object-cover md:h-full"
					/>
				</div>

				<!-- Product Info -->
				<div class="p-8 md:w-1/2">
					<div class="mb-6">
						<h2 class="mb-4 text-3xl font-bold text-gray-900">
							{{ product.title }}
						</h2>
						<p class="mb-6 leading-relaxed text-gray-600">
							{{ product.description }}
						</p>
					</div>

					<div class="space-y-4">
						<div class="flex items-center justify-between">
							<span class="text-sport-600 text-2xl font-bold"
								>${{ product.price }}</span
							>
							<span class="text-sm text-gray-500"
								>Stock: {{ product.stock }}</span
							>
						</div>

						<div class="flex items-center space-x-2">
							<div class="flex text-yellow-400">
								<svg
									v-for="i in 5"
									:key="i"
									class="h-5 w-5"
									:class="
										i <= Math.round(product.rating)
											? 'text-yellow-400'
											: 'text-gray-300'
									"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
									/>
								</svg>
							</div>
							<span class="text-gray-600">({{ product.rating }})</span>
						</div>

						<div class="pt-4">
							<button
								class="bg-sport-600 hover:bg-sport-700 w-full rounded-lg px-6 py-3 font-semibold text-white transition-colors duration-200"
							>
								Add to Cart
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
