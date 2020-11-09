
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import Rating from '../components/Rating';
const ProductDetails = ({match}) => {
    const [Product, setProduct] = useState({});
    useEffect(() => {
        const fetchProducts = async () => {
          const { data } = await axios.get(`/api/products/${match.params.id}`);
          setProduct(data);
        };
        fetchProducts();
      }, []);
    return (
        <>
           
    
            <div className="container">
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link> 
            <div className="row">
                <div className="col">
                <img className='card-img-top'style={{ width: '30rem' }} src={Product.image} alt={Product.name} fluid />
                </div>
              {/* ----------------------------------- */}
                <div className="col">
                <ul className="list-group">
                    <li className="list-group-item" > <h3 className='card-title'> <strong>{Product.name}</strong> </h3></li>
                    <li className="list-group-item"><Rating  value={Product.rating} text={`${Product.numReviews} reviews`}  /></li>
                    <li className="list-group-item">Price : TND {Product.price}</li>
                    <li className="list-group-item">Description : ${Product.description}</li>
                </ul>
              
               </div>
               {/* ----------------------------- */}
               <div className="col">
               <div className='card m-3 p-3 ' style={{ width: '18rem' }}>

                           {/* --------- */}
                           <div className="col">
               <div className="row list-group-flush">
               <li className=" list-group-item"> Price : </li>
                 <li className="list-group-item">TND {Product.price} </li>
              </div>
               </div>
               {/* --------- */}
               <div className="col">
               <div className="row list-group-flush">
         <div className="list-group-item"> Status : </div>
       <div className="list-group-item"> <strong>{Product.countInStock>0?' In stock':' Out of stock'}</strong> </div>
       </div>
               </div>
       {/* ----------------- */}
                

              <div className="list-group-item"> 
              <button className="btn btn-block btn-dark  " type='button' disabled={Product.countInStock===0}>
              Add To Cart
              </button>
               </div>
               </div>

               </div>
            </div>
            </div>
     
        </>
       
    )
}

export default ProductDetails
