import { TProductState, TTotalProductsPagesArray } from "src/store/products-table-reducer/types";


export const getTotalPagesArray = (totalProducts: number, productsInTablePage: number, products: TProductState[]) => {
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