import { combineReducers } from 'redux';
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer
} from './productReducers';
import { cartReducer } from './cartReducers';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer,
} from './orderReducers';
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userListReducer,
  userDeleteReducer,
  userUpdateReducer,
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
  orderPay          : orderPayReducer          ,
  orderListMy       : orderListMyReducer       ,
  userList          : userListReducer          ,
  userDelete        : userDeleteReducer        ,
  userUpdate        : userUpdateReducer        ,
  productDelete     : productDeleteReducer     ,
  productCreate     : productCreateReducer     ,
});
