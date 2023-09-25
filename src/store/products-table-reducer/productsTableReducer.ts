import { initialState } from "./initialState"
import { SET_PRODUCTS_DATA, SET_PRODUCTS_DATA_LOADING, SET_PRODUCTS_DATA_LOADING_ERROR, SET_TOTAL_PRODUCTS_PAGES, SET_CURRENT_PRODUCTS_PAGE } from "./constants"
import { TProductsTableState, TProductState } from "./types"
import { AnyAction } from "redux"
import setProductsData from "../../lib/setProductsData"

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
            console.log(action.payload)
            return {
                ...state, currentProductsPage: action.payload
            }
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


