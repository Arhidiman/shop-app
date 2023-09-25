import ProductsTable from "../../shared/products-table/ProductsTable";
import PaginationComponent from "../../shared/pagination-component/PaginationComponent";

function MainPage() {
    return (
        <section>
            <ProductsTable/>
            <PaginationComponent/>
        </section>
    )
}

export default MainPage