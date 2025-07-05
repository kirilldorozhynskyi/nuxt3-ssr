import type { Product, ApiResponse } from '~/types'

// API base URL
const API_BASE = 'https://dummyjson.com'

// Composable for API operations
export const useApi = () => {
	// Fetch products with pagination
	const fetchProducts = async (limit: number = 10, skip: number = 0) => {
		try {
			const response = await $fetch<ApiResponse<Product>>(
				`${API_BASE}/products?limit=${limit}&skip=${skip}`
			)
			return response
		} catch (error) {
			console.error('Error fetching products:', error)
			throw error
		}
	}

	// Fetch single product by ID
	const fetchProduct = async (id: string | number) => {
		try {
			const response = await $fetch<Product>(`${API_BASE}/products/${id}`)
			return response
		} catch (error) {
			console.error('Error fetching product:', error)
			throw error
		}
	}

	// Search products
	const searchProducts = async (query: string, limit: number = 10) => {
		try {
			const response = await $fetch<ApiResponse<Product>>(
				`${API_BASE}/products/search?q=${query}&limit=${limit}`
			)
			return response
		} catch (error) {
			console.error('Error searching products:', error)
			throw error
		}
	}

	return {
		fetchProducts,
		fetchProduct,
		searchProducts,
	}
}
