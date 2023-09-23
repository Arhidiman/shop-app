export type TProductsTableState = {
    products: TProductState[] | null
}

export type TProductState = {
    id: number | null,
    title: string | null,
    description: string | null,
    price: number,
    discountPercentage: number | null,
    rating: number | null,
    stock: number | null,
    brand: string | null,
    category: string | null,
    thumbnail: string | null,
    images: string[] | null
}
