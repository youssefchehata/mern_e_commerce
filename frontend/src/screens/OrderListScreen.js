
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../components/Loader';
import { Message } from '../components/Message';
import { listOrders } from '../store/actions/orderActions';

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;



  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push(`/login`);
    }
  }, [dispatch,history,userInfo]);

  return (
    <>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error} </Message>
      ) : (
        <table className='table table-striped table-hover table-bordered  table-sm '>
          <div className='table-responsive'>
            <table className='table align-middle'>
              <thead>
                <tr>
                <th scope='col'></th>
                  <th scope='col'>ID</th>
                  <th scope='col'>USER</th>
                  <th scope='col'>DATE</th>
                  <th scope='col'>TOTAL</th>
                  <th scope='col'>PAID</th>
                  <th scope='col'>DELIVERED</th>
                 
                </tr>
              </thead>
              <tbody>
                {orders.map((el) => (
                  <tr key={el._id}>
                    <th scope='row'>1</th>
                    <td>{el._id}</td>
                    <td>{el.user && el.user.name}</td>
                    <td>{el.createdAt.substring(0,10)}</td>
                    <td>{el.totalPrice}</td>
         
                    <td>
                      {el.isPaid ? (
                        el.paidAt.substring(0,10)
                      ) : (
                        <i
                          className='fas fa-check'
                          style={{ color: 'red' }}
                        ></i>
                      )}
                    </td>
                    <td>
                      {el.isDelivered ? (
                        el.deliveredAt.substring(0,10)
                      ) : (
                        <i
                          className='fas fa-check'
                          style={{ color: 'red' }}
                        ></i>
                      )}
                    </td>
                    <td>
                      <Link to={`/order/${el._id}`}>
                        <button type='button' className='btn btn-white btn-sm'>
                         Details
                        </button>
                      </Link>
               
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </table>
      )}
    </>
  );
};

export default OrderListScreen;
