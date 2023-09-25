import axios from "axios";
import { Dispatch } from "react"
import { AnyAction } from "redux"
import { productsUrl } from "./constants";
import { setProductsDataAction, setProductsDataLoadingAction, setProductsDataLoadingErrorAction } from "src/store/products-table-reducer/productsTableReducer";

export const apiGetAllProductsData = (dispatch: Dispatch<AnyAction>) => {    

   dispatch(setProductsDataLoadingAction(true))
    axios
        .get(productsUrl)
        .then((res) => {
            dispatch(setProductsDataAction(res.data.products))
            dispatch(setProductsDataLoadingAction(false))
        })
        .catch((error: Error) => {
            dispatch(setProductsDataLoadingErrorAction(error.message))
        })
};
