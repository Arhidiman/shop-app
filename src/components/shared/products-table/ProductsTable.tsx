import "./ProductsTable.scss"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { apiGetAllProductsData } from "src/api/apiGetAllProductsData"
import { apiSearchProductsByName } from "src/api/apiSearchProductsByName"
import { AppState } from "src//main"
import ProductsTableRow from "./products-table-row/ProductsTableRow"
import { TProductState } from "src/store/products-table-reducer/types"
import { SyntheticEvent, useCallback } from "react"

function ProductsTable() {

    const dispatch = useDispatch()
    const { totalProductsPagesArray, currentProductsPage, productsLoading } = useSelector((state: AppState) => state.productsTable)
    const currentPageData = totalProductsPagesArray[currentProductsPage]

    useEffect(() => {
        apiGetAllProductsData(dispatch)
    },[])

    const searchProducts = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
        const inputElement = e.target as HTMLInputElement
        const productName = inputElement.value 
        apiSearchProductsByName(dispatch, productName)
    }, [])

    const productTableRow = ((product: TProductState, i: number) => {
        return <ProductsTableRow key={product.id} productId={product.id}/>
    })

    return (  
        <>
            {productsLoading
                ? 
                <h2>loading...</h2> 
                :
                <>
                    <input className="input" onChange={searchProducts} placeholder="Поиск по названию"/>
                    <div className="products-table">
                        <ProductsTableRow className="column-names"/>
                        {currentPageData && currentPageData.map(productTableRow)}
                    </div>
                </>
            }
          
        </>
    )
}

export default ProductsTable
