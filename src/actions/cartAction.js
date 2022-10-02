import {
  
  ADD_TO_CART_SUCCESS,
  REMOVE_FROM_CART,
} from "../constants/cart-constants";

export const cartAction = (item) => async (dispatch) => {
  
    dispatch({ type: ADD_TO_CART_SUCCESS, payload: item });
  
};

export const removeFromCartAction =  (id) => async (dispatch) =>{
    dispatch({type : REMOVE_FROM_CART , payload:{id}})
}
