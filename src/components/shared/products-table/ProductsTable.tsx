import "./ProductsTable.scss"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { apiGetAllProductsData } from "../../../api/apiGetAllProductsData"
import { AppState } from "../../../main"
import ProductsTableRow from "./products-table-row/ProductsTableRow"
import { TProductState } from "../../../store/products-table-reducer/types"

function ProductsTable() {

    const dispatch = useDispatch()
    const productsData = useSelector((state: AppState) => state.productsTable.products)
    console.log(productsData)

    useEffect(() => {
        apiGetAllProductsData(dispatch)
    },[])

    return (  
        productsData && productsData.map((product: TProductState, i: number) => {
            return <ProductsTableRow key={product.id} productNumber={i}/>
        })
    )
}

export default ProductsTable
