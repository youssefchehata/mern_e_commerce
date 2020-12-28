import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';
import Cart from './screens/Cart';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen'



import HomeScreen from '../src/screens/HomeScreen';
import ProductDetails from '../src/screens/ProductDetails';
import Profile from './screens/Profile';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomePresta from './screens/prestaShop/HomePresta'
import NotFound from './components/NotFound'
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import OrderListScreen from './screens/OrderListScreen';
import ProductEditScreen from './screens/ProductEditScreen';


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
         
          <Route exact  path='/admin/orderlist' component={OrderListScreen} />
          <Route exact  path='/admin/productlist' component={ProductListScreen} />
          <Route exact  path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route exact  path='/admin/userlist' component={UserListScreen} />
          <Route exact  path='/admin/user/:id/edit' component={UserEditScreen} />
         

          <Route exact  path='/order/:id' component={OrderScreen} />
          <Route exact path='/product/:id' component={ProductDetails} />
          <Route exact path='/search/:keyword' component={HomeScreen} />
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
