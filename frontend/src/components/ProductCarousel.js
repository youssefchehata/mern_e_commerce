import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import { Loader } from './Loader';
import { Message } from './Message';
import { listTopProducts } from '../store/actions/productActions';

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message>{error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark'>
      {products.map((el) => (
        <Carousel.Item key={el._id}>
          <Link to={`product/${el._id}`}>
            <Image src={el.image} alt={el.name} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {el.name} ({el.price}){' '}
              </h2>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
