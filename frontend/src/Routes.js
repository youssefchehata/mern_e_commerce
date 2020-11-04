
import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';


class Routes extends Component {
  state = {
    auth: true
  };
//   componentDidMount() {
//     if (!localStorage.getItem('auth')) {
//       this.setState({ auth: true });
//     }
//   }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomeScreen} />
 
          {/* <Route exact path='/screens/HomeScreen  ' component= {HomeScreen} /> */}
   
          {/* <Route path='/DetailsHotels/:id' component={Product} /> */}
          {/* ------------------------ */}
          {/* <Route component={NotFound} />
          <Redirect to='/Layout/NotFound' /> */}

          {/* ------------------------------- */}
          {/* {this.state.auth && <Redirect push to='/' />} */}
        </Switch>
      </div>
    );
  }
}

export default Routes;
