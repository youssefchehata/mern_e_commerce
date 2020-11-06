import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import Cart from './screens/Cart';

import HomeScreen from '../src/screens/HomeScreen';
import ProductDetails from '../src/screens/ProductDetails';
import Profile from './screens/Profile';
import HomePresta from './screens/prestaShop/HomePresta'
import NotFound from './components/NotFound'
class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          
          <Route exact  path='/HomePresta' component={HomePresta} />
          <Route exact path='/HomePresta' component={HomePresta} />
          <Route exact path='/Profile' component={Profile} />
          <Route exact  path='/Cart' component={Cart} />
          <Route exact path='/product/:id' component={ProductDetails} />
          <Route exact path='/' component={HomeScreen} />
          <Route exact component={NotFound} />
        <Redirect to='/components/NotFound' />
         
          
        </Switch>
      </div>
    );
  }
}

export default Routes;
