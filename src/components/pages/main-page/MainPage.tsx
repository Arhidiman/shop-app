import "./MainPage.scss"
import ProductsTable from "src/components/shared/products-table/ProductsTable";
import PaginationComponent from "src/components/shared/pagination-component/PaginationComponent";
import FiltersComponent from "src/components/shared/filters-component/FiltersComponent";

function MainPage() {
    return (
        <section className="main-page">
            <div className="main-page-products-container">
                <FiltersComponent/>
                <ProductsTable/>
            </div>
            <PaginationComponent/>
        </section>
    )
}

export default MainPage