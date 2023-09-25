import axios from "axios";
import { Dispatch } from "react"
import { AnyAction } from "redux"
import { searchProductUrl } from "./constants";
import { setProductsDataAction, setProductsDataLoadingAction, setProductsDataLoadingErrorAction } from "src/store/products-table-reducer/productsTableReducer";

export const apiSearchProductsByName = (dispatch: Dispatch<AnyAction>, productName: string) => {    
   dispatch(setProductsDataLoadingAction(true))
    axios
        .get(searchProductUrl+productName)
        .then((res) => {
            console.log(res.data)
            dispatch(setProductsDataAction(res.data.products))
        })
        .catch((error: Error) => {
            dispatch(setProductsDataLoadingErrorAction(error.message))
        })
};
