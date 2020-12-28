import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import {Loader} from '../components/Loader'
import {Message} from '../components/Message'
import { listProducts } from '../store/actions/productActions';

const HomeScreen = ({match}) => {
  const keyword = match.params.keyword
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch,keyword]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
       <Loader/>
      ) : error ? (
        <Message>
          <div>backendError!!!{error}</div>
        </Message>
      ) : (
        <div className='row'>
          {products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
      )}
    </>
  );
};

export default HomeScreen;
