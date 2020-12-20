import axios from 'axios';
import * as A from '../constants/cartConstant';

export const addCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: A.CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: A.CART_REMOVE_ITEM,
    payload: id,
  });
  localStorage.removeItem( 'cartItems', JSON.stringify(getState().cart.cartItems) );
};


export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: A.CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });
  localStorage.setItem( 'shippingAddress', JSON.stringify(data) );
};


export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: A.CART_SAVE_PAYMENT_METHOD,
    payload: data,
  });
  localStorage.setItem( 'PaymentMethod', JSON.stringify(data) );
};

