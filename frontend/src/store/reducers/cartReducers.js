import * as A from '../constants/cartConstant';

export const cartReducer = (state = { cartItems: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case A.CART_ADD_ITEM:
      const item =payload
      const existItem = state.cartItems.find(x=>x.product === item.product)
      if(existItem){
          return {
              ...state,
              cartItems:state.cartItems.map(x=>x.product === existItem.product ? item : x)
          }
      }else{
          return{
              ...state,
              cartItems:[...state.cartItems , item]
          }
      }

    case A.CART_REMOVE_ITEM:
      return { loading: false, products: payload };
  
    default:
      return state;
  }
};