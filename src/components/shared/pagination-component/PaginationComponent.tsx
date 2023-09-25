import './PaginationComponent.scss'
import { useDispatch, useSelector } from "react-redux"
import { AppState } from "main";
import { TProductState } from "store/products-table-reducer/types";
import { setCurrentProductsPageAction } from '../../../store/products-table-reducer/productsTableReducer';
import { SyntheticEvent } from 'react'

function PaginationComponent() {

    const dispatch = useDispatch()
    const { totalProductsPagesArray } = useSelector((state: AppState) => state.productsTable)

    const setCurrentProductsPage = (e: SyntheticEvent<HTMLInputElement>) => {
        const inputElement = e.target as HTMLInputElement
        dispatch(setCurrentProductsPageAction(Number(inputElement.value)-1))
    }

    const paginationButton = ((button: TProductState[], i: number) => {
        return <input key={i} className="pagination-button" value={i+1} onClick={setCurrentProductsPage}/>
    })
   
    return (
        <div className="pagination">
            { totalProductsPagesArray.map(paginationButton) }
        </div>
       
    )
}

export default PaginationComponent