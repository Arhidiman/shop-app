import { TProductsTableState } from "./types"

export const initialState: TProductsTableState = {
    products: [],
    productsLoading: false,
    productsLoadingError: null,
    productsInTablePage: 5,
    totalProductsPagesArray: [],
    currentProductsPage: 2
}