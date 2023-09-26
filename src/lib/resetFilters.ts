import { TProductsTableState} from "src/store/products-table-reducer/types";
import { getTotalPagesArray } from "./getTotalPagesArray";

const resetFilters = (state: TProductsTableState) => {
    
    const {products, productsInTablePage} = state
    const totalProducts = products.length

    const newState = {
        ...state, 
        totalProductsPagesArray: getTotalPagesArray(totalProducts, productsInTablePage, products),
        currentProductsPage: 0
    }
    return newState
}

export default resetFilters