import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import {Loader} from '../components/Loader'
import {Message} from '../components/Message'
import Paginate from '../components/Paginate'
import { listProducts } from '../store/actions/productActions';
import ProductCarousel from '../components/ProductCarousel';

const HomeScreen = ({match}) => {
  const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products , page,pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword,pageNumber));
  }, [dispatch,keyword,pageNumber]);

  return (
    <div className='container-fluid'>
    {!keyword && <ProductCarousel/> }
      <h1>Latest Products</h1>
      {loading ? (
       <Loader/>
      ) : error ? (
        <Message>
          <div>backendError!!!{error}</div>
        </Message>
      ) : (
        <>
                <div className='row'>
          {products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </div>
        <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''} />
        </>
  

      )}
    </div>
  );
};

export default HomeScreen;
