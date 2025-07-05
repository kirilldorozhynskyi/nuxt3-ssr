// Common component types
export interface Product {
	id: number
	title: string
	description: string
	price: number
	thumbnail: string
	rating: number
	stock: number
}

export interface CardProps {
	hover?: boolean
	className?: string
}

export interface LoadingProps {
	text?: string
}

export interface ErrorProps {
	title: string
	message: string
}
