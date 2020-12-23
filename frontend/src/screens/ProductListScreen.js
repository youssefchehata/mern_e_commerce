import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../components/Loader';
import { Message } from '../components/Message';
import { listProducts,deleteProduct } from '../store/actions/productActions';

const ProductListScreen = ({ history, match }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const { loading:loadingDelete, error:errorDelete ,success:successDelete} = productDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listProducts());
    } else {
      history.push(`/login`);
    }
  }, [dispatch, history, userInfo,successDelete]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
        dispatch(deleteProduct(id))
    }
  };

  const createProductHandler = () => {};
  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createProductHandler}>
            <i className='fas fa-plus'></i> Create Product
          </Button>
        </Col>
      </Row>
       {loadingDelete && <Loader/> }
       {errorDelete && <Message>{errorDelete}</Message> }
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
                  <th scope='col'>NAME</th>
                  <th scope='col'>PRICE</th>
                  <th scope='col'>CATEGORY</th>
                  <th scope='col'>BRAND</th>
                  <th scope='col'></th>
                </tr>
              </thead>
              <tbody>
                {products.map((el) => (
                  <tr key={el._id}>
                    <th scope='row'>1</th>
                    <td>{el._id}</td>
                    <td>{el.name}</td>
                    <td> TND {el.price} </td>
                    <td> {el.category} </td>
                    <td> {el.brand} </td>

                    <td>
                      <Link to={`/admin/product/${el._id}/edit`}>
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

export default ProductListScreen;
