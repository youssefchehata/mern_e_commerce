// import React from 'react';
// import Footer from './components/Footer';
// import Header from './components/Header';
// import { Route, Switch, Redirect } from "react-router-dom";
// import { Container } from 'react-bootstrap';
// import HomeScreen from './screens/HomeScreen';
// import Cart from './screens/Cart'
// const App = (props) => {
//   return (
//     <Switch>
//       <Header />
//       <main className='py-3'>
      
//         <Container>
//           <HomeScreen />
//           <Route path="/Cart" component={Cart} />
//           {props.children}
//         </Container>

//       </main>
//       <Footer />
//     </Switch>
//   );
// };

// export default App;
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Cart from "./screens/Cart";
import Header from './components/Header'
import HomeScreen from '../src/screens/HomeScreen'
import ProductDetails from '../src/screens/ProductDetails'
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="content py-3">
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;