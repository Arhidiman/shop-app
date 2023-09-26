import { TCategoriesState } from "./types"

export const initialState: TCategoriesState = {
    categoriesList: [],
    currentCategory: null,
    isVisible: false,
    loading: false,
    error: null
}