import React, { useState, useEffect } from 'react';
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../components/Loader';
import { Message } from '../components/Message';
import CheckoutSteps from './CheckoutSteps';
import { createOrder } from '../store/actions/orderActions';
import { Link } from 'react-router-dom';

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  //Calculate prices
  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  cart.itemsPrice = addDecimal(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimal(cart.itemsPrice > 100 ? 0 : 100);

  cart.taxPrice = addDecimal(Number((0.19 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`)
    }
  }, [history, success]);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        taxPrice: cart.taxPrice,
        shippingPrice: cart.shippingPrice,
        
        totalPrice: cart.totalPrice,
      })
    );
  };

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <div className='row'>
        <div className='col-8'>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {cart.shippingAddress.address},{cart.shippingAddress.city},
                {cart.shippingAddress.postalCode},{cart.shippingAddress.country}
              </p>
            </li>

            <li className='list-group-item'>
              <h2>Payment Method</h2>
              <p>
                <strong>Method:</strong>
                {cart.paymentMethod}
              </p>
            </li>

            <li className='list-group-item'>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message> Your cart is empty</Message>
              ) : (
                <ul className='list-group list-group-flush'>
                  {cart?.cartItems.map((el, index) => (
                    <li className='list-group-item'>
                      <div className='row'>
                        <div className='col-md-1'>
                          <Image
                            src={el.image}
                            alt={el.name}
                            className='img-fluid rounded'
                          />
                        </div>
                        <div className='col'>
                          <Link to={`/product/${el.name}`}>{el.name}</Link>
                        </div>
                        <div className='col-md-4'>
                          {el.qty} x TND {el.price} = TND {el.qty * el.price}
                        </div>
                    
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <p>
                <strong>Method:</strong>
                {cart.paymentMethod}
              </p>
            </li>
          </ul>
        </div>
        <div className='col-md-4'>
                          <div className='card'>
                            <ul className='list-group list-group-flush'>
                              <li className='list-group-item'>
                                <h2>Order Summary</h2>
                              </li>
                              <li className='list-group-item'>
                                <div className='row'>
                                  <div className='col'>Items</div>
                                  <div className='col'>
                                    TND{cart.itemsPrice}
                                  </div>
                                </div>
                              </li>

                              <li className='list-group-item'>
                                <div className='row'>
                                  <div className='col'>Shipping</div>
                                  <div className='col'>
                                    TND{cart.shippingPrice}
                                  </div>
                                </div>
                              </li>
                              <li className='list-group-item'>
                                <div className='row'>
                                  <div className='col'>Tax</div>
                                  <div className='col'>TND{cart.taxPrice}</div>
                                </div>
                              </li>
                              <li className='list-group-item'>
                                <div className='row'>
                                  <div className='col'>Total</div>
                                  <div className='col'>
                                    TND{cart.totalPrice}
                                  </div>
                                </div>
                              </li>
                              <li className='list-group-item'>
                                {error && <Message>{error} </Message>}
                              </li>
                              <li className='list-group-item'>
                                <button
                                  type='button'
                                  className='btn btn-primary '
                                  disabled={cart.cartItems === 0}
                                  onClick={placeOrderHandler}
                                >
                                  place order
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
      </div>
    </>
  );
};
export default PlaceOrderScreen;
