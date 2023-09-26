import { TProductsTableState, TProductState, TTotalProductsPagesArray } from "src/store/products-table-reducer/types";
import { getTotalPagesArray } from "./getTotalPagesArray";

const setProductsData = (state: TProductsTableState, payload: TProductState[]) => {
    
    const products = payload
    const totalProducts = products.length
    const productsInTablePage = state.productsInTablePage

    const newState = {
        ...state, 
        products: payload,
        totalProductsPagesArray: getTotalPagesArray(totalProducts, productsInTablePage, products),
        currentProductsPage: 0
    }
    return newState
}

export default setProductsData