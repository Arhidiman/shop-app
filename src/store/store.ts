import { combineReducers } from "redux";
import { productsTableReducer } from "./products-table-reducer/productsTableReducer";


export const rootReducer = combineReducers({
    productsTable: productsTableReducer
})