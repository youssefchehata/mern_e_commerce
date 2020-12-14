
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { listProductDetails } from '../store/actions/productActions';
// import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'

import Rating from '../components/Rating';
import { Loader } from '../components/Loader';
import { Message } from '../components/Message';
const ProductDetails = ({match}) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch,match]);


    return (
        <>
           
    
            <div className="container">
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link> 
            {loading?<Loader/>:error?<Message>errorBackend!!{error}</Message>:
              <div className="row">
                <div className="col">
                <img className='card-img-top'style={{ width: '30rem' }} src={product.image} alt={product.name} fluid />
                </div>
              {/* ----------------------------------- */}
                <div className="col">
                <ul className="list-group">
                    <li className="list-group-item" > <h3 className='card-title'> <strong>{product.name}</strong> </h3></li>
                    <li className="list-group-item"><Rating  value={product.rating} text={`${product.numReviews} reviews`}  /></li>
                    <li className="list-group-item">Price : TND {product.price}</li>
                    <li className="list-group-item">Description : ${product.description}</li>
                </ul>
              
               </div>
               {/* ----------------------------- */}
               <div className="col">
               <div className='card m-3 p-3 ' style={{ width: '18rem' }}>

                           {/* --------- */}
                           <div className="col">
               <div className="row list-group-flush">
               <li className=" list-group-item"> Price : </li>
                 <li className="list-group-item">TND {product.price} </li>
              </div>
               </div>
               {/* --------- */}
               <div className="col">
               <div className="row list-group-flush">
         <div className="list-group-item"> Status : </div>
       <div className="list-group-item"> <strong>{product.countInStock>0?' In stock':' Out of stock'}</strong> </div>
       </div>
               </div>
       {/* ----------------- */}
                

              <div className="list-group-item"> 
              <button className="btn btn-block btn-dark  " type='button' disabled={product.countInStock===0}>
              Add To Cart
              </button>
               </div>
               </div>

               </div>
            </div>
            }
     
            </div>
     
        </>
       
    )
}

export default ProductDetails
