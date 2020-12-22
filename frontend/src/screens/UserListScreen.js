import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../components/Loader';
import { Message } from '../components/Message';
import { listUsers } from '../store/actions/userActions';

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push(`/login`);
    }
  }, [dispatch,history]);

  const deleteHandler = (id) => {};
  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message>{error} </Message>
      ) : (
        <table className='table table-striped table-hover table-bordered  table-sm '>
          <div className='table-responsive'>
            <table class='table align-middle'>
              <thead>
                <tr>
                  <th scope='col'>ID</th>
                  <th scope='col'>NAME</th>
                  <th scope='col'>EMAIL</th>
                  <th scope='col'>ADMIN</th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>
                {users.map((el) => (
                  <tr key={el._id}>
                    <th scope='row'>1</th>
                    <td>{el._id}</td>
                    <td>{el.name}</td>
                    <td>
                      {' '}
                      <a href={`mailto:${el.email}`}>{el.email}</a>{' '}
                    </td>
                    <td>
                      {el.isAdmin ? (
                        <i
                          className='fas fa-check'
                          style={{ color: 'green' }}
                        ></i>
                      ) : (
                        <i
                          className='fas fa-check'
                          style={{ color: 'red' }}
                        ></i>
                      )}
                    </td>
                    <td>
                      <Link to={`/user/${el._id}/edit`}>
                        <button type='button' className='btn btn-white btn-sm'>
                          <i className='fas fa-edit'></i>
                        </button>
                      </Link>
                      <button
                        type='button'
                        className='btn btn-danger btn-sm'
                        onClick={() => {
                          deleteHandler(el._id);
                        }}
                      >
                        <i className='fas fa-trash'></i>
                      </button>
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

export default UserListScreen;
