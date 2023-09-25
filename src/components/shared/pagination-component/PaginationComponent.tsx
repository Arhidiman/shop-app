import "./PaginationComponent.scss"
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "src/main";
import { TProductState } from "src/store/products-table-reducer/types";
import { setCurrentProductsPageAction } from "src/store/products-table-reducer/productsTableReducer";
import { SyntheticEvent, useCallback, memo } from "react"

function PaginationComponent() {

    const dispatch = useDispatch()
    const { totalProductsPagesArray, currentProductsPage } = useSelector((state: AppState) => state.productsTable)

    const setCurrentProductsPage = useCallback((e: SyntheticEvent<HTMLButtonElement>) => {
        const inputElement = e.target as HTMLButtonElement
        dispatch(setCurrentProductsPageAction(Number(inputElement.innerHTML)-1))
    }, [])
    
    const paginationButton = ((button: TProductState[], i: number) => {
        return <button key={i} className={`pagination-button ${currentProductsPage === i && "selected"}`}  onClick={setCurrentProductsPage}>{i+1}</button>
    })
   
    return (
        <div className="pagination">
            { totalProductsPagesArray.map(paginationButton) }
        </div>
    )
}

export default memo(PaginationComponent)