import { combineReducers } from "redux";
import { productsTableReducer } from "./products-table-reducer/productsTableReducer";
import { productsCategoriesReducer } from "./products-categories-reducer/productsCategoriesReducer";

const rootReducer = combineReducers({
    productsTable: productsTableReducer,
    categoriesData: productsCategoriesReducer
})

export default rootReducer