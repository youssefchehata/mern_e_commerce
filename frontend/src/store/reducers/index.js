import { combineReducers } from 'redux';
import authReducer from './authReducer';
import productsReducers from './productsReducers';
import categoryReducers from './categoryReducers';
import clientsReducers from './clientsReducers';
import shopListReducer from './shopListReducer';
import CurrentClientReducer from './curentClient';
import reglementReducers from './reglementReducers';
import docTypeReducer from './docTypeReducer';
import favorisReducer from './favorisReducer';
import spinnerReducer from './spinnerReducer';
// import placesReducer from './places';

export default combineReducers({
 auth: authReducer,
 products:productsReducers,
 category:categoryReducers,
 clients:clientsReducers,
 shopList:shopListReducer,
 CurrentClient:CurrentClientReducer,
 reglements:reglementReducers,
 docType:docTypeReducer,
 favoris:favorisReducer,
 spinner:spinnerReducer
  // places: placesReducer
});
