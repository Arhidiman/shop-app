import { initialState } from "./initialState"
import { SET_PRODUCTS_DATA } from "./constants"
import { TProductsTableState } from "./types"
import { AnyAction } from "redux"


export const productsTableReducer = (state = initialState as TProductsTableState, action: AnyAction) => {
    switch (action.type) {
        case SET_PRODUCTS_DATA: {
            return action.payload
        }
        
        default: return state
    }
}

//actions
export const setProductsDataAction = (payload: TProductsTableState) => {return {type: SET_PRODUCTS_DATA, payload}}




