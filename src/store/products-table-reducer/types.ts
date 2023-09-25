export type TProductsTableState = {
    products: TProductState[] | [],
    productsLoading: boolean,
    productsLoadingError: string | null,
    productsInTablePage: number | null,
    totalProductsPagesArray: TTotalProductsPagesArray | [],
    currentProductsPage: number
}

export type TProductState = {
    id: number | null,
    title: string | null,
    description: string | null,
    price: number | null,
    discountPercentage: number | null,
    rating: number | null,
    stock: number | null,
    brand: string | null,
    category: string | null,
    thumbnail: string | null,
    images: string[] | null
}

export type TProductPageArray = TProductState[] 
export type TTotalProductsPagesArray = TProductPageArray[]