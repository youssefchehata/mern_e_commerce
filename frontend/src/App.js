
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

import { Container } from 'react-bootstrap'
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
        <h1>Welcome To Proshop</h1> 
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
