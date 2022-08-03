import { ActionTypes } from "../constants/action-types";

export const productReducer = (state = {products: []}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            };
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
}

export const categorizedProductReducer = (state = {products: []}, {type, payload, category}) => {
    switch (type) {
        case ActionTypes.SET_CATEGORIZED_PRODUCTS:
            return {
                ...state,
                products: payload,
                category: category
            };
        case ActionTypes.REMOVE_CATEGORIZED_PRODUCTS:
            return {
                ...state,
                products: [],
                category: ""
            }
        default:
            return state;
    }
}