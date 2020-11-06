import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import Cart from './screens/Cart';

import HomeScreen from '../src/screens/HomeScreen';
import ProductDetails from '../src/screens/ProductDetails';
import Profile from './screens/Profile';

class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/Profile' component={Profile} />
          <Route path='/Cart' component={Cart} />
          <Route path='/product/:id' component={ProductDetails} />
          <Route path='/' component={HomeScreen} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
