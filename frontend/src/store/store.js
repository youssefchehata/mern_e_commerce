import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {productListReducer} from './reducers/productReducers'
import rootReducer from './reducers/rootReducer';




const reducer = rootReducer
const cartItemsFromStorage = localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]
const initialState = {
  cart:{cartItems:cartItemsFromStorage}
  //   authR: { authenticated: localStorage.getItem('token') },
};
const middleware = [thunk];
const store = createStore(
    reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
