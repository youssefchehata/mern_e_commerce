import { combineReducers } from 'redux';
import { productListReducer, productDetailsReducer } from './productReducers';
import { cartReducer } from './cartReducers';
import { orderCreateReducer ,orderDetailsReducer} from './orderReducers';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from './userReducer';

export default combineReducers({
  productList       : productListReducer       ,
  productDetails    : productDetailsReducer    ,
  cart              : cartReducer              ,
  userLogin         : userLoginReducer         ,
  userRegister      : userRegisterReducer      ,
  userDetails       : userDetailsReducer       ,
  userUpdateProfile : userUpdateProfileReducer ,
  orderCreate       : orderCreateReducer       ,
  orderDetails      : orderDetailsReducer      ,
});
