



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../components/Loader';
import { Message } from '../components/Message';
import FormContainer from '../components/FormContainer';
import { register,getUserDetails } from '../store/actions/userActions';

const UserEditScreen = ({location,history,match}) => {
  const userId = match.params.id


  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
 
 

  const dispatch = useDispatch()

  const userDetails = useSelector(state=>state.userDetails)
  const {loading, error , user}= userDetails



useEffect(()=>{
    if(!user.name || user._id !== userId){
     dispatch(getUserDetails(userId))
    }else{
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
    }

},[dispatch,user,userId])

  const submitHandler = (e) => {
  e.preventDefault()



  };

  return (
    <>
        <Link to ={`/admin/userlist`} className='btn btn-light my-3'>Go Back </Link>



        <FormContainer>
      <h1>Edit User</h1>
      {/* {message && <Message   >{message}</Message>}
      {error && <Message   >{error}</Message>} */}
      {loading ? <Loader/>  : error ?   <Message   >{error}</Message>:(


          <Form onSubmit={submitHandler}>

      <Form.Group controlId='name'>
          <Form.Label>name </Form.Label>
          <Form.Control
            type={name}
            placeholder='Enter name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type={email}
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='isAdmin'>
         
          <Form.Check
            type='checkbox'
            label='Is Admin'
            
            checked={isAdmin}
            onChange={(e) => setIsAdmin(e.target.checked)}
          ></Form.Check>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Update
        </Button>
      </Form>
      )
      
      
      }
      
      <Row className='py-3'>
        <Col>
          {/* <Link to={redirect ? `/login?redirect=${redirect}` : `/login`}>
            Have an Account ?
          </Link> */}
        </Col>
      </Row>
    </FormContainer>
    </>


    
  );
};

export default UserEditScreen;

