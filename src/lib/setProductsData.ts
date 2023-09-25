import { TProductsTableState, TProductState, TTotalProductsPagesArray } from "store/products-table-reducer/types";

const setProductsData = (state: TProductsTableState, payload: TProductState[]) => {
    
    const products = payload
    const totalProducts = products.length
    const productsInTablePage = state.productsInTablePage
    const totalPages = Math.ceil(totalProducts/productsInTablePage)

    const getTotalPagesArray = (totalProducts: number, totalPages: number, productsInTablePage: number) => {
        let totalProductsPagesArray: TTotalProductsPagesArray = []
        let arrayCounter = 0
        for(let i: number = 0; i < totalProducts; i++) {
            if(i === 0) {
                totalProductsPagesArray.push([])
            }
            totalProductsPagesArray[arrayCounter].push(products[i])
            if((i + 1) % productsInTablePage === 0 && i !== totalProducts - 1) {
                totalProductsPagesArray.push([])
                arrayCounter++
            }
        }
        return totalProductsPagesArray
    }

    const newState = {
        ...state, 
        products: payload,
        totalProductsPagesArray: getTotalPagesArray(totalProducts, totalPages, productsInTablePage),
        currentProductsPage: 0
        
    }
    return newState
}

export default setProductsData