import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer, categorizedProductReducer } from './productReducer';

const reducers =  combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    categorizedProducts: categorizedProductReducer
});

export default reducers;