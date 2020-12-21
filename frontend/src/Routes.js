import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import Cart from './screens/Cart';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';



import HomeScreen from '../src/screens/HomeScreen';
import ProductDetails from '../src/screens/ProductDetails';
import Profile from './screens/Profile';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomePresta from './screens/prestaShop/HomePresta'
import NotFound from './components/NotFound'
class Routes extends Component {
  render() {
    return (
      <div>
        <Switch>
          
          <Route exact  path='/HomePresta' component={HomePresta} />
      


          
          <Route exact path='/register' component={RegisterScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/profile' component={Profile} />
          <Route exact  path='/Cart/:id?' component={Cart} />
          <Route exact  path='/shipping' component={ShippingScreen} />
          <Route exact  path='/payment' component={PaymentScreen} />
          <Route exact  path='/placeorder' component={PlaceOrderScreen} />
          <Route exact  path='/order/:id' component={OrderScreen} />
          <Route exact path='/product/:id' component={ProductDetails} />
          <Route exact path='/' component={HomeScreen} />
          <Route exact component={NotFound} />
        <Redirect to='/components/NotFound' />
         
           {/* {this.state.auth && <Redirect push to='/' />} */}
        </Switch>
      </div>
    );
  }
}

export default Routes;
