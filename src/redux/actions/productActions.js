import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}
export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}

export const setCategorizedProducts = (categorizedProducts, category) => {
    return {
        type: ActionTypes.SET_CATEGORIZED_PRODUCTS,
        category: category,
        payload: categorizedProducts
    }
}
export const removeCategorizedProducts = () => {
    return {
        type: ActionTypes.REMOVE_CATEGORIZED_PRODUCTS,
    }
}