import React from 'react';
import Rating from './Rating';
// import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <>
      <div className='card m-3 p-3 rounded' style={{ width: '18rem' }}>
        <a href={`/product/${product._id}`}>
          <img
            className='card-img-top'
            src={product.image}
            alt='Card image cap'
          />
        </a>
        <div className='card-body'>
          <a href={`/product/${product._id}`}>
            {' '}
            <h5 className='card-title'>
              {' '}
              <strong>{product.name}</strong>{' '}
            </h5>{' '}
          </a>
          <div className='card-text my-3'>
            <Rating  
            value={product.rating}
            text={`${product.numReviews} Reviews`}
            
            />
           
          </div>
          <h3> TND {product.price}</h3>
        </div>
      </div>
    </>
  );
};

export default Product;
