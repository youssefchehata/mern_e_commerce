import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {productListReducer} from './reducers/productReducers'
import rootReducer from './reducers/rootReducer';




const reducer = rootReducer
const initialState = {
  //   authR: { authenticated: localStorage.getItem('token') },
};
const middleware = [thunk];
const store = createStore(
    reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
