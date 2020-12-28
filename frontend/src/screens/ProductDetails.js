
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { listProductDetails ,createProductReview} from '../store/actions/productActions';
import {PRODUCT_CREATE_REVIEW_RESET} from '../store/constants/productConstant'
// import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'

import Rating from '../components/Rating';
import { Loader } from '../components/Loader';
import { Message } from '../components/Message';
const ProductDetails = ({match,history}) => {
  const [qte,setQte]=useState(1)
  const [rating,setRating]=useState(0)
  const [comment,setComment]=useState('')
 
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const { success:successProductReview, error:errorProductReview } = productReviewCreate;

  useEffect(() => {
    if(successProductReview){
      alert('Review submitted!')
      setRating(0)
      setComment('')
      dispatch({type:PRODUCT_CREATE_REVIEW_RESET})
    }
    dispatch(listProductDetails(match.params.id));
  }, [dispatch,match,successProductReview]);

 const addToCart=()=>{
  history.push(`/cart/${match.params.id}?qte=${qte}`)

 }
 const submitHandler =(e)=>{
   e.preventDefault()
   dispatch(createProductReview(match.params.id,{rating,comment}))
 }

    return (
        <>
           
            <div className="container">
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link> 
            {loading?<Loader/>:error?<Message>errorBackend!!{error}</Message>:
            <>
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
       {/* ----------qte------- */}
{
  product.countInStock>0&&       <div className="col">
               <div className="row list-group-flush">
         <div className="list-group-item"> Qte : </div>
       <div className="list-group-item">
       < >

  <select className="form-select" selected value={qte} onChange={(e)=>setQte(e.target.value)} >
{  [...Array(product.countInStock).keys()].map(x=>(
    <option key={x+1} value={x+1} >
      {x+1}
    </option> 
  ))}
  </select>

</>
        </div>
       </div>
               </div>
}


                {/* ------------------------ */}

              <div className="list-group-item"> 
              <button className="btn btn-block btn-dark  " type='button' disabled={product.countInStock===0}
              onClick={addToCart}
              >
              Add To Cart
              </button>
               </div>
               </div>

               </div>
            </div>

<div className="row">
  <div className="col-md-6">
    <h2>Reviews</h2>
    {product.reviews.length === 0 && <Message>No Reviews</Message>}
    <ul className='list-group list-group-flush'>
      {product.reviews.map(el=>(
        <li className='list-group-item'key={el._id}>
               <strong>{el.name}</strong>
               <Rating value={el.rating} />
               <p>{el.createdAt.substring(0,10) }</p>
               <p>{el.comment }</p>
              </li>
      ))}
      <li className='list-group-item'>
        <h2>Write a Customer Review</h2>
        {errorProductReview&& <Message>{errorProductReview}</Message>}
        {userInfo ?<form onSubmit={submitHandler}>
           
        <div class="mb-3">
         <select className="form-select" aria-label="Rating"
    onChange={(e)=>setRating(e.target.value)} value={rating} 
    >
  <option selected value='' >Select...</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="4">Four</option>
</select>
   </div>

 <div class="mb-3">
<div className="form-floating">
  <textarea class="form-control" placeholder="Leave a comment here" id="comment"
   onChange={(e)=>setComment(e.target.value)} value={comment} 
  ></textarea>
  <label for="comment">Comments</label>
</div>
<button type="submit" class="btn btn-dark">Primary</button>
</div>

 
         </form>
          

  
        :<Message>
          Please <Link to={'/login'} > Sign In</Link>
        </Message> }
      </li>
    </ul>
             
  </div>
</div>
</>
            }
     
            </div>
     
        </>
       
    )
}

export default ProductDetails
