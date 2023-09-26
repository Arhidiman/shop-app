import axios from "axios";
import { Dispatch } from "react"
import { AnyAction } from "redux"
import { getAllCategoriesUrl } from "./constants";
import { setProductsCategoriesDataAction, 
    setProductsCategoriesLoadingAction, 
    setProductsCategoriesLoadingErrorAction } 
from "src/store/products-categories-reducer/productsCategoriesReducer";

export const apiGetAllCategories = (dispatch: Dispatch<AnyAction>) => {    
    dispatch(setProductsCategoriesLoadingAction(true))
    axios
        .get(getAllCategoriesUrl)
        .then((res) => {
            dispatch(setProductsCategoriesDataAction(res.data))
            dispatch(setProductsCategoriesLoadingAction(false))
        })
        .catch((error: Error) => {
            dispatch(setProductsCategoriesLoadingErrorAction(error.message))
        })
};
