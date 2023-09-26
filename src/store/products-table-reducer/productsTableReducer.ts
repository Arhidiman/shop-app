import { initialState } from "./initialState"
import { SET_PRODUCTS_DATA, 
    SET_PRODUCTS_DATA_LOADING, 
    SET_PRODUCTS_DATA_LOADING_ERROR, 
    SET_TOTAL_PRODUCTS_PAGES, 
    SET_CURRENT_PRODUCTS_PAGE, 
    FILTER_PRODUCTS_WITH_CATEGORY,
    RESET_FILTERS,
    SORT_PRODUCTS_WITH_CATEGORIES,
} from "./constants"
import { TProductsTableState, TProductState } from "./types"
import { AnyAction } from "redux"
import setProductsData from "../../lib/setProductsData"
import filterProductsWithCategory from "src/lib/filterProductsWithCategory"
import sortProductsWithProperty from "src/lib/sortProductsWithProperty"
import resetFilters from "src/lib/resetFilters"

export const productsTableReducer = (state = initialState as TProductsTableState, action: AnyAction) => {
    switch (action.type) {
        case SET_PRODUCTS_DATA: {
            return setProductsData(state, action.payload)
        }
        case SET_PRODUCTS_DATA_LOADING: {
            return {
                ...state, productsLoading: action.payload
            }
        }
        case SET_PRODUCTS_DATA_LOADING_ERROR: {
            return {
                ...state, productsLoadingError: action.payload
            }
        }
        case SET_TOTAL_PRODUCTS_PAGES: {
            return {
                ...state, totalProductsPages: Math.ceil(state.products.length/state.productsInTablePage)
            }
        }
        case SET_CURRENT_PRODUCTS_PAGE: {
            return {
                ...state, currentProductsPage: action.payload
            }
        }
        case FILTER_PRODUCTS_WITH_CATEGORY: {
            return filterProductsWithCategory(state, action.payload)
        }
        case RESET_FILTERS: {
            return resetFilters(state)
        }
        case SORT_PRODUCTS_WITH_CATEGORIES: {
            return sortProductsWithProperty(state, action.payload)
        }
        default: return state
    }
}

//actions
export const setProductsDataAction = (payload: TProductState) => {return {type: SET_PRODUCTS_DATA, payload}}
export const setProductsDataLoadingAction = (payload: boolean) => {return {type: SET_PRODUCTS_DATA_LOADING, payload}}
export const setProductsDataLoadingErrorAction = (payload: string) => {return {type: SET_PRODUCTS_DATA_LOADING_ERROR, payload}}
export const setTotalProductsPagesAction = () => {return {type: SET_TOTAL_PRODUCTS_PAGES}}
export const setCurrentProductsPageAction = (payload: number) => {return {type: SET_CURRENT_PRODUCTS_PAGE, payload: payload}}
export const filterProductsWithCategoryAction = (payload: string) => {return {type: FILTER_PRODUCTS_WITH_CATEGORY, payload: payload}}
export const resetFiltersAction = () => {return {type: RESET_FILTERS}}
export const sortProductsWithCategoriesAction = (payload: keyof TProductState) => {return {type: SORT_PRODUCTS_WITH_CATEGORIES, payload: payload}}



