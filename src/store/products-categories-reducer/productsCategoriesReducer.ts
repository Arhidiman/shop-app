import { initialState } from "./initialState"
import { SET_PRODUCTS_CATEGORIES_DATA,
    SET_PRODUCTS_CATEGORIES_VISIBILITY, 
    SET_PRODUCTS_CATEGORIES_LOADING, 
    SET_PRODUCTS_CATEGORIES_LOADING_ERROR,
    SET_CURRENT_CATAGORY } 
from "./constants"
import { TCategoriesState } from "./types"
import { AnyAction } from "redux"

export const productsCategoriesReducer = (state = initialState as TCategoriesState, action: AnyAction) => {
    switch (action.type) {
        case SET_PRODUCTS_CATEGORIES_DATA: {
            return {
                ...state, categoriesList: action.payload
            }
        }
        case SET_PRODUCTS_CATEGORIES_VISIBILITY: {
            return {
                ...state, isVisible: !state.isVisible
            }
        }
        case SET_PRODUCTS_CATEGORIES_LOADING: {
            return {
                ...state, loading: action.payload
            }
        }
        case SET_PRODUCTS_CATEGORIES_LOADING_ERROR: {
            return {
                ...state, error: action.payload
            }
        }
        case SET_CURRENT_CATAGORY: {
            return {
                ...state, currentCategory: action.payload
            }
        }
        default: return state
    }
}

//actions
export const setProductsCategoriesDataAction = (payload: string[]) => {return {type: SET_PRODUCTS_CATEGORIES_DATA, payload}}
export const setProductsCategoriesVisibilityAction = () => {return {type: SET_PRODUCTS_CATEGORIES_VISIBILITY}}
export const setProductsCategoriesLoadingAction = (payload: boolean) => {return {type: SET_PRODUCTS_CATEGORIES_LOADING, payload: payload}}
export const setProductsCategoriesLoadingErrorAction = (payload: string) => {return {type: SET_PRODUCTS_CATEGORIES_LOADING_ERROR, payload: payload}}
export const setCurrentCategoryAction = (payload: string) => {return {type: SET_CURRENT_CATAGORY, payload: payload}}



