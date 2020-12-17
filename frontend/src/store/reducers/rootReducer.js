import { combineReducers } from 'redux';
import { productListReducer, productDetailsReducer } from './productReducers';
import { cartReducer } from './cartReducers';
import { userLoginReducer,userRegisterReducer } from './userReducer';

export default combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart:cartReducer,
  userLogin:userLoginReducer,
  userRegister:userRegisterReducer
});
