import "./ProductsTable.scss"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { apiGetAllProductsData } from "../../../api/apiGetAllProductsData"
import { AppState } from "../../../main"
import ProductsTableRow from "./products-table-row/ProductsTableRow"
import { TProductState } from "../../../store/products-table-reducer/types"

function ProductsTable() {

    const dispatch = useDispatch()
    const { totalProductsPagesArray, currentProductsPage } = useSelector((state: AppState) => state.productsTable)
    const currentPageData = totalProductsPagesArray[currentProductsPage]

    useEffect(() => {
        apiGetAllProductsData(dispatch)
    },[])

    const productTableRow = ((product: TProductState, i: number) => {
        return <ProductsTableRow key={product.id} productId={product.id}/>
    })

    return (  
        <div className="products-table">
            {currentPageData && currentPageData.map(productTableRow)}
        </div>
        
    )
}

export default ProductsTable
