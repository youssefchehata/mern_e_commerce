import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <>
      <div className='card my-3 p-3 rounded' style={{ width: '18rem' }}>
        <img
          className='card-img-top'
          src={product.image}
          alt='Card image cap'
        />
        <div className='card-body'>
          <h5 className='card-title'>{product.name}</h5>
          <p className='card-text'>{product.rating}</p>
          <h3>{product.price}</h3>
          <a href='#' className='btn btn-primary'>
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};
{
  /* <div className='col'>{product.name}</div> */
}

export default Product;
