import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { apiGetAllProductsData } from "src/api/apiGetAllProductsData"
import { apiSearchProductsByName } from "src/api/apiSearchProductsByName"
import { SyntheticEvent, useCallback } from "react"
import { sortProductsWithCategoriesAction } from "src/store/products-table-reducer/productsTableReducer"

function ProductsTableControls() {

    const dispatch = useDispatch()

    useEffect(() => {
        apiGetAllProductsData(dispatch)
    },[])

    const searchProducts = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
        const inputElement = e.target as HTMLInputElement
        const productName = inputElement.value 
        apiSearchProductsByName(dispatch, productName)
    }, [])

    const sortProductsWithCategories = () => {
        dispatch(sortProductsWithCategoriesAction('category'))
    }

    const sortProductsWithBrands = () => {
        dispatch(sortProductsWithCategoriesAction('brand'))
    }

    return (  
        <div className="products-table-controls">
            <button className="button-default" onClick={sortProductsWithCategories}>сортировать по категории</button>
            <button className="button-default" onClick={sortProductsWithBrands}>сортировать по бренду</button>
            <input className="input" onChange={searchProducts} placeholder="Поиск по названию"/>
        </div>
    )
}

export default ProductsTableControls
