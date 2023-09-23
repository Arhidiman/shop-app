import axios from "axios";
import { Dispatch } from "react"
import { AnyAction } from "redux"
import { productsUrl } from "./constants";
import { setProductsDataAction, setProductsDataLoadingAction, setProductsDataLoadingErrorAction } from "../store/products-table-reducer/productsTableReducer";

export const apiGetAllProductsData = (dispatch: Dispatch<AnyAction>) => {    

   dispatch(setProductsDataLoadingAction(true))
    axios
        .get(productsUrl)
        .then((res) => {
            // console.log(res.data)
            dispatch(setProductsDataAction(res.data.products))
        })
        .catch((error: Error) => {
            dispatch(setProductsDataLoadingErrorAction(error.message))
        })
        .finally(() => {
            dispatch(setProductsDataLoadingAction(false))
        });
};
