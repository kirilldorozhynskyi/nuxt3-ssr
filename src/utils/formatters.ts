// Format price with currency
export const formatPrice = (
	price: number,
	currency: string = 'USD'
): string => {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: currency,
	}).format(price)
}

// Format rating with stars
export const formatRating = (rating: number): string => {
	return `${rating.toFixed(1)}/5`
}

// Format discount percentage
export const formatDiscount = (discount: number): string => {
	return `${Math.round(discount)}% OFF`
}

// Truncate text with ellipsis
export const truncateText = (text: string, maxLength: number): string => {
	if (text.length <= maxLength) return text
	return text.slice(0, maxLength) + '...'
}

// Format stock status
export const formatStockStatus = (stock: number): string => {
	if (stock === 0) return 'Out of Stock'
	if (stock < 10) return `Only ${stock} left`
	return `${stock} in stock`
}
