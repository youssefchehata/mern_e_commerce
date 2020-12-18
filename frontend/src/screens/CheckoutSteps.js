import React from 'react';

import { Nav } from 'react-bootstrap';

import { Link , } from 'react-router-dom';
const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (


    <Nav className='justify-content-center mb-4'>
    
  
    
      <Nav.Item> {step1 ? ( <Nav.Link > <Link to={'/login'}>Sign In</Link></Nav.Link> ) : ( <Nav.Link disabled>Sign In</Nav.Link> )} </Nav.Item>

      <Nav.Item> {step2 ? (  <Nav.Link ><Link to={'/shipping'}>Shipping</Link></Nav.Link>  ) : ( <Nav.Link disabled>Shipping</Nav.Link> )} </Nav.Item>

      <Nav.Item> {step3 ? ( <Nav.Link ><Link to={'/payment'}>payment</Link></Nav.Link> ) : ( <Nav.Link disabled>Payment</Nav.Link> )} </Nav.Item>

      <Nav.Item> {step4 ? ( <Nav.Link ><Link to={'/placeorder'}>place order</Link></Nav.Link>  ) : ( <Nav.Link disabled>Place order</Nav.Link> )} </Nav.Item>
      
    </Nav>
  );
};

export default CheckoutSteps;
