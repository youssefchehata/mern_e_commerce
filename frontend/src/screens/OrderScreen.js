import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../components/Loader';
import { Message } from '../components/Message';

import { getOrderDetails } from '../store/actions/orderActions';
import { Link } from 'react-router-dom';

const OrderScreen = ({ match }) => {
  const orderId = match.params.id;

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  //Calculate prices
  if (!loading) {
    const addDecimal = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };

    order.itemsPrice = addDecimal(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );
  }
  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, []);
  return loading ? (
    <Loader />
  ) : error ? (
    <Message>{error}</Message>
  ) : (
    <>
      <h1>Order {order._id} </h1>

      <div className='row'>
        <div className='col-8'>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>
              <h2>Shipping</h2>
              <p> <strong>Name:</strong>{order.user.name}</p>
              <p><strong>Email:</strong><Link to={`mailto:${order.user.email}`} >{order.user.email} </Link></p>
             
              
              <p>
                <strong>Address:</strong>
                {order.shippingAddress.address},{order.shippingAddress.city},
                {order.shippingAddress.postalCode},
                {order.shippingAddress.country}
              </p>
              {order.isDelivered  ? <Message>Delivered on {order.deliveredAt} </Message>:
              <Message>Not Delivered</Message>
               }
            </li>

            <li className='list-group-item'>
              <h2>Payment Method</h2>
              <p>
                <strong>Method:</strong>
                {order.paymentMethod}
              </p>
              {order.isPaid  ? <Message>Paid on {order.paidAt} </Message>:
              <Message>Not Paid</Message>
               }
            </li>

            <li className='list-group-item'>
              <h2>Order Items</h2>
              {order.orderItems.length === 0 ? (
                <Message> Your order is empty</Message>
              ) : (
                <ul className='list-group list-group-flush'>
                  {order?.orderItems.map((el, index) => (
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
                {order.paymentMethod}
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
                  <div className='col'>TND{order.itemsPrice}</div>
                </div>
              </li>

              <li className='list-group-item'>
                <div className='row'>
                  <div className='col'>Shipping</div>
                  <div className='col'>TND{order.shippingPrice}</div>
                </div>
              </li>
              <li className='list-group-item'>
                <div className='row'>
                  <div className='col'>Tax</div>
                  <div className='col'>TND{order.taxPrice}</div>
                </div>
              </li>
              <li className='list-group-item'>
                <div className='row'>
                  <div className='col'>Total</div>
                  <div className='col'>TND{order.totalPrice}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderScreen;
