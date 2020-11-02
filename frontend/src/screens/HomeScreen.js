import React from 'react';
import Product from '../components/Product';
import products from './../products';
const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <div className='row'>
        {products.map((product) => (
        <Product product={product} />
        ))}
      </div>
    </>
  );
};

export default HomeScreen;
