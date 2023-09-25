import { useDispatch, useSelector } from "react-redux"
import { AppState } from "../../../../main"
import { TProductState } from "../../../../store/products-table-reducer/types"

interface IProductsTableRow {
      productId: number
}

function ProductsTableRow({ productId }: IProductsTableRow) {

    const productsData = useSelector((state: AppState) => state.productsTable.products) as any
    const product = productsData.find((product: TProductState) => product.id === productId)

    return (
        <div className="products-table-row">
            <li className="products-table-cell">{product.title}</li>
            <li className="products-table-cell-description">{product.description}</li>
            <li className="products-table-cell">{product.price}</li>
            <li className="products-table-cell">{product.rating}</li>
            <li className="products-table-cell">{product.stock}</li>
            <li className="products-table-cell">{product.brand}</li>
            <li className="products-table-cell">{product.category}</li>
            <img alt="product" src={product.thumbnail} className="products-table-thumbnail"></img>          
        </div>
    )
}

export default ProductsTableRow
