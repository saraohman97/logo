import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import productReducer from '../singleProduct/productReducer'
import cartReducer from '../cart/cartReducer'

export default combineReducers({
    productsReducer,
    productReducer,
    cartReducer
})