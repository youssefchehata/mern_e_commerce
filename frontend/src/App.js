import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <HomeScreen />
        </Container>
        {/* <div className="container">
          <h1>Welcome To Proshop</h1> 
          
        </div> */}
      </main>
      <Footer />
    </>
  );
};

export default App;
