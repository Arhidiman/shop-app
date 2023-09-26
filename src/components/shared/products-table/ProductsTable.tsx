import "./ProductsTable.scss"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { apiGetAllProductsData } from "src/api/apiGetAllProductsData"
import { AppState } from "src//main"
import ProductsTableRow from "./products-table-row/ProductsTableRow"
import { TProductState } from "src/store/products-table-reducer/types"
import ProductsTableControls from "./products-table-controls/ProductsTableControls"

function ProductsTable() {

    const dispatch = useDispatch()
    const { totalProductsPagesArray, currentProductsPage, productsLoading } = useSelector((state: AppState) => state.productsTable)
    const currentPageData = totalProductsPagesArray[currentProductsPage]

    useEffect(() => {
        apiGetAllProductsData(dispatch)
    },[])

    const productTableRow = ((product: TProductState, i: number) => {
        return <ProductsTableRow key={product.id} productId={product.id}/>
    })

    return (  
        <div className="products-table-wrapper">
            <ProductsTableControls/>
            <div className="products-table">
                <div className="products-table-main">
                    <ProductsTableRow className="column-names"/>
                    {currentPageData && currentPageData.map(productTableRow)}
                </div>
            </div>
        </div>
    )
}

export default ProductsTable
