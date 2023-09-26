import { sortBy } from "lodash"
import { getTotalPagesArray } from "./getTotalPagesArray";
import { TProductState } from "src/store/products-table-reducer/types";
import { TProductsTableState } from "src/store/products-table-reducer/types";

const sortProductsWithProperty = (state: TProductsTableState, property: keyof TProductState) => {
    
    const { products } = state
    const totalProducts = products.length
    const productsInTablePage = state.productsInTablePage

    const sortedProducts = sortBy(products, [(o) => o[property]])

    const newState = {
        ...state, 
        totalProductsPagesArray: getTotalPagesArray(totalProducts, productsInTablePage, sortedProducts),
        currentProductsPage: 0
    }
    return newState
}

export default sortProductsWithProperty