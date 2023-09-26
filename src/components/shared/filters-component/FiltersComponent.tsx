import "./FiltersComponent.scss"
import { useDispatch, useSelector } from "react-redux"
import { apiGetAllCategories } from "src/api/apiGetAllCategories"
import { AppState } from "src//main"
import { useCallback } from "react"
import { setProductsCategoriesVisibilityAction, setCurrentCategoryAction } from "src/store/products-categories-reducer/productsCategoriesReducer"
import { filterProductsWithCategoryAction, resetFiltersAction } from "src/store/products-table-reducer/productsTableReducer"
import { SyntheticEvent } from 'react'


function FiltersComponent() {

    const dispatch = useDispatch()
    const { categoriesList, isVisible, currentCategory } = useSelector((state: AppState) => state.categoriesData)
    
    const changeCategoriesVisibility = useCallback(() => {dispatch(setProductsCategoriesVisibilityAction())}, [])
    const getAllCategories = useCallback(() => {
        apiGetAllCategories(dispatch)
        changeCategoriesVisibility()
    }, [])

   const filterProductsWithCategory = useCallback((e: SyntheticEvent<HTMLLIElement>) => {
        const liElement = e.target as HTMLLIElement
        const category = liElement.innerHTML 
        dispatch(filterProductsWithCategoryAction(category))
        dispatch(setCurrentCategoryAction(category))
   }, [])

    const resetCategories = () => {
        dispatch(resetFiltersAction())
        dispatch(setCurrentCategoryAction(null))
    }

    const category = ((category: string, i: number) => {
        return <li 
                    key={i} 
                    className={`filters-categories-item ${category === currentCategory ? 'selected' : ''}`} 
                    onClick={filterProductsWithCategory}
                    >
                    {category}
                </li>
    })
    
    return (  
        <div className="filters">
            <button onClick={categoriesList.length === 0 ? getAllCategories : changeCategoriesVisibility}>{!isVisible ? "Показать категории" : "Скрыть категории"}</button>
            {
            isVisible && 
            <>
                <ul className="filters-categories">
                    {categoriesList.length !== 0 && categoriesList.map(category)}
                </ul>
                <button onClick={resetCategories}>Сбросить фильтры</button>
            </>
            }
            
        </div>
    )
}

export default FiltersComponent
