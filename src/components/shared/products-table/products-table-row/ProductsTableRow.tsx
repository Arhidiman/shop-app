import { useSelector } from "react-redux"
import { AppState } from "src/main"
import { TProductState } from "src/store/products-table-reducer/types"
import { memo } from "react"
 
interface IProductsTableRow {
      productId?: number,
      className?: string
}

function ProductsTableRow({ productId, className }: IProductsTableRow) {

    const productsData = useSelector((state: AppState) => state.productsTable.products) as any
    const product = productId && productsData.find((product: TProductState) => product.id === productId)

    return (
        <div className="products-table-row">
            <li className={`products-table-cell title ${className}`}>{productId ? product.title : "title"}</li>
            <li className={`products-table-cell description ${className}`}>{productId ? product.description : "description"}</li>
            <li className={`products-table-cell ${className}`}>{productId ? product.price : "price"}</li>
            <li className={`products-table-cell ${className}`}>{productId ? product.rating : "rating"}</li>
            <li className={`products-table-cell ${className}`}>{productId ? product.stock : "stock"}</li>
            <li className={`products-table-cell ${className}`}>{productId ? product.brand : "brand"}</li>
            <li className={`products-table-cell ${className}`}>{productId ? product.category : "category"}</li>
            {
                productId
                ? 
                <img alt="product" src={product.thumbnail} className="products-table-thumbnail"></img>
                : 
                <li className={`products-table-cell ${className}`}>thimbnail</li>
            }
        </div>
    )
}

export default memo(ProductsTableRow)
