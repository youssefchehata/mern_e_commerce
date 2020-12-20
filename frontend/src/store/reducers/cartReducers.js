import * as A from '../constants/cartConstant';

export const cartReducer = (state = { cartItems: [] ,shippingAddress:{}}, action) => {
  const { type, payload } = action;
  switch (type) {
    case A.CART_ADD_ITEM:
      const item = payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case A.CART_REMOVE_ITEM:
      return { 
        ...state,
        cartItems:state.cartItems.filter(el=>el.product !== payload )
       };
       case A.CART_SAVE_SHIPPING_ADDRESS:
        return { 
          ...state,
          shippingAddress:payload
         };
         case A.CART_SAVE_PAYMENT_METHOD:
          return { 
            ...state,
            paymentMethod:payload
           };
    default:
      return state;
  }
};
