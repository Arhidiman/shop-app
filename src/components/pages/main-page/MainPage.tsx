import ProductsTable from "src/components/shared/products-table/ProductsTable";
import PaginationComponent from "src/components/shared/pagination-component/PaginationComponent";

function MainPage() {
    return (
        <section>
            <ProductsTable/>
            <PaginationComponent/>
        </section>
    )
}

export default MainPage