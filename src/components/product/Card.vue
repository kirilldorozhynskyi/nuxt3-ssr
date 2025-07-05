<template>
	<div
		class="transform rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
	>
		<div class="overflow-hidden">
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
</template>

<script setup lang="ts">
	interface Product {
		id: number
		title: string
		description: string
		price: number
		thumbnail: string
		rating: number
		stock: number
	}

	interface Props {
		product: Product
	}

	defineProps<Props>()
</script>
