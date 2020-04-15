import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING, MAKE_ORDER} from './action-types/types'

//add cart action
export const addToCart=(id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
export const makeOrder=(id)=>{
    return{
        type: MAKE_ORDER,
        id
    }
}
export const fetchProduct=(id)=>{
    return{
        type: 'FETCH_PRODUCT',
        id
    }
}