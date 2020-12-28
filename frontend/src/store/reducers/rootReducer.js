import { combineReducers } from 'redux';
import {
  productListReducer,
  productDetailsReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
  productReviewCreateReducer,
  productTopRatedReducer
} from './productReducers';
import { cartReducer } from './cartReducers';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer,
  orderListReducer,
  orderDeliverReducer
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
  productList         : productListReducer         ,
  productDetails      : productDetailsReducer      ,
  cart                : cartReducer                ,
  userLogin           : userLoginReducer           ,
  userRegister        : userRegisterReducer        ,
  userDetails         : userDetailsReducer         ,
  userUpdateProfile   : userUpdateProfileReducer   ,
  orderCreate         : orderCreateReducer         ,
  orderDetails        : orderDetailsReducer        ,
  orderPay            : orderPayReducer            ,
  orderListMy         : orderListMyReducer         ,
  userList            : userListReducer            ,
  userDelete          : userDeleteReducer          ,
  userUpdate          : userUpdateReducer          ,
  productDelete       : productDeleteReducer       ,
  productCreate       : productCreateReducer       ,
  productUpdate       : productUpdateReducer       ,
  orderList           : orderListReducer           ,
  orderDeliver        : orderDeliverReducer        ,
  productReviewCreate : productReviewCreateReducer ,
  productTopRated     : productTopRatedReducer     ,
});
