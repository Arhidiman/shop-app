import { TProductsTableState } from "src/store/products-table-reducer/types";

import { getTotalPagesArray } from "./getTotalPagesArray";

const filterProductsWithCategory = (state: TProductsTableState, payload: string) => {
    
    const choosenCategory = payload
    const { products } = state

    const newProducts = products.filter((product) => {
        return product.category === choosenCategory
    })

    const totalProducts = newProducts.length
    const productsInTablePage = state.productsInTablePage

    const totalPagesArray = getTotalPagesArray(totalProducts, productsInTablePage, newProducts)
    
    const newState = {
        ...state, 
        totalProductsPagesArray: totalPagesArray
    }
    return newState
}

export default filterProductsWithCategory