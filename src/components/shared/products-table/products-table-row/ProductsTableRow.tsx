


interface IProductsTableRow {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

function ProductsTableRow(
    {
        // id,
        // title,
        // description,
        // price,
        // discountPercentage,
        // rating,
        // stock,
        // brand,
        // category,
        // thumbnail,
        // images
    }

) {


    return (
        <ul className="products-table-row">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
}

export default ProductsTableRow
