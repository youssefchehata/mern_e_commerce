import React, { useEffect } from 'react';
import{useDispatch,useSelector} from 'react-redux'
import Product from '../components/Product';
import {listProducts} from '../store/actions/productActions'

const HomeScreen = () => {
 
const dispatch = useDispatch()

const productList=useSelector(state=>state.productList)
const {loading,error,products} =productList


  useEffect(() => {dispatch(listProducts())
 
  }, [dispatch]);


  return (
    <>
      <h1>Latest Products</h1>
      {loading?<h2>Loading...</h2> : error ? <h3>{error}</h3>  :
       <div className='row'>
        {products.map((product) => (
          <Product product={product} key={product._id} />
        ))}
      </div>
      }

    </>
  );
};

export default HomeScreen;
