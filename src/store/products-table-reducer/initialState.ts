import { TProductsTableState } from "./types"

export const initialState: TProductsTableState = {
    products: [],
    productsLoading: false,
    productsLoadingError: null,
    productsInTablePage: 3,
    totalProductsPagesArray: [],
    currentProductsPage: 0
}