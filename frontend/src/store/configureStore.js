import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
  whitelist: ['shopList']
  // whitelist: ['products','favoris','shopList']
  // whitelist: ['favoris']
 
}
const persistedReducer = persistReducer(persistConfig, rootReducer)




const middleware = [thunk];

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export const configureStore =  createStore(
    persistedReducer,
   
    composeEnhancers(applyMiddleware(...middleware)),
  
  );
  


export const persistor = persistStore(configureStore)



