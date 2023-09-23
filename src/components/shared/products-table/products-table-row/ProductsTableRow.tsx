import { useSelector } from "react-redux"
import { AppState } from "../../../../main"

interface IProductsTableRow {
      productNumber: number
}

function ProductsTableRow({ productNumber }: IProductsTableRow) {

    const productsData = useSelector((state: AppState) => state.productsTable.products)
    const product = productsData[productNumber]

    return (
        <div className="products-table-row">
            <li className="products-table-cell">{product.title}</li>
            <li className="products-table-cell-desctiption">{product.description}</li>
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
