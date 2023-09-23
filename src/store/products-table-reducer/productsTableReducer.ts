import { initialState } from "./initialState"
import { SET_PRODUCTS_DATA, SET_PRODUCTS_DATA_LOADING, SET_PRODUCTS_DATA_LOADING_ERROR } from "./constants"
import { TProductsTableState, TProductState } from "./types"
import { AnyAction } from "redux"

export const productsTableReducer = (state = initialState as TProductsTableState, action: AnyAction) => {
    switch (action.type) {
        case SET_PRODUCTS_DATA: {
            console.log(action.payload)
            return {
                ...state, products: action.payload
            }
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
        
        default: return state
    }
}

//actions
export const setProductsDataAction = (payload: TProductState) => {return {type: SET_PRODUCTS_DATA, payload}}
export const setProductsDataLoadingAction = (payload: boolean) => {return {type: SET_PRODUCTS_DATA_LOADING, payload}}
export const setProductsDataLoadingErrorAction = (payload: string) => {return {type: SET_PRODUCTS_DATA_LOADING_ERROR, payload}}



