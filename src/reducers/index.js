import { combineReducers } from 'redux';
import cartReducer2 from './productReducer'
import cartReducer from './cartReducer'

export default combineReducers({
    productList: cartReducer2,
    items: cartReducer
});