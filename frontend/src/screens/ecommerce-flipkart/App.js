import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage';
import ProductListPage from './containers/ProductListPage';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn, updateCart } from './actions';
import ProductDetailsPage from './containers/ProductDetailsPage';
import CartPage from './containers/CartPage';

function App() {

  const dispatch  = useDispatch();
  const auth = useSelector(state => state.auth);


  useEffect(() => {
    
    if(!auth.authenticate){
      dispatch(isUserLoggedIn());
    }

  }, [auth.authenticate]);

  useEffect(() => {
    dispatch(updateCart());
  }, []);


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/:productSlug/:productId/p" component={ProductDetailsPage} />
          <Route path="/:slug" component={ProductListPage} />
          
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
