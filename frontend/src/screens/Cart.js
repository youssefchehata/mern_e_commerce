import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import { Loader } from '../components/Loader';
import { Message } from '../components/Message';
import { addCart , removeFromCart } from '../store/actions/cartActions';

const Cart = ({ match, location, history }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id)) 
    console.log(id);
  };

  const checkOutHandler =()=>{
      history.push('/login?redirect=shipping')
   
  }
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart is empty <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((el) => (
              <ListGroup.Item key={el.product}>
                <Row>
                  <Col md={2}>
                    <Image src={el.image} alt={el.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${el.product}`}>{el.name}</Link>
                  </Col>
                  <Col md={2}>TND {el.price} </Col>
                  <Col md={3}>
                    <Form.Control
                      as='select'
                      value={el.qty}
                      onChange={(e) =>
                        dispatch(addCart(el.product, Number(e.target.value)))
                      }
                    >
                      {[...Array(el.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(el.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>

      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              TND{' '}
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroup.Item>

            <ListGroup.Item>
                <Button type='button' className='btn-block' disabled={cartItems.length===0}
                onClick={checkOutHandler}>checkOut</Button>
            </ListGroup.Item>

          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default Cart;
