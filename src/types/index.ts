// Product interface for API responses
export interface Product {
	id: number
	title: string
	description: string
	price: number
	discountPercentage: number
	rating: number
	stock: number
	brand: string
	category: string
	thumbnail: string
	images: string[]
}

// API response interface
export interface ApiResponse<T> {
	products?: T[]
	total?: number
	skip?: number
	limit?: number
}

// Navigation item interface
export interface NavItem {
	label: string
	to: string
	icon?: string
}

// Theme colors interface
export interface ThemeColors {
	primary: Record<string, string>
	sport: Record<string, string>
}
