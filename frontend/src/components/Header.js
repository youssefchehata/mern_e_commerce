// rafce
import React from 'react';
import {Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Nav, NavDropdown,LinkContainer } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {logout} from '../store/actions/userActions'
import SearchBox from './SearchBox';


const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector(state=>state.userLogin)
  const { userInfo}= userLogin
  const logoutHandler =()=>{
    dispatch(logout())
  }

  return (
    <header>
      <Nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand ' to='/'>
          Youssef_Shop
        </Link>
    
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
         <Route render={({history})=> <SearchBox history={history} />}></Route>
          
            
          <ul className='navbar-nav ml-auto'>

      

            <li className='nav-item'>
              <Link className='nav-link ml-auto' to='/Cart'> <i className='fas fa-shopping-cart'></i> Cart </Link>
            </li>
            {userInfo ? (
              <NavDropdown  title={userInfo.name} id='username'>
              <li> <Link className=' dropdown-item' to ='/profile'> Profile </Link> </li>
              <li> <Link className=' dropdown-item' onClick={logoutHandler}> Log Out </Link> </li>
   
              
              </NavDropdown>
            ):     <li className='nav-item'>
              <Link className='nav-link ml-auto' to='/login'> <i className='fas fa-user'></i> Sign In </Link>
            </li>}
            {userInfo&& userInfo.isAdmin && (
              <NavDropdown  title='Admin'id='adminmenu'>

              <li> <Link className=' dropdown-item' to ='/admin/userlist'> Users </Link> </li>
              <li> <Link className=' dropdown-item' to ='/admin/productlist'> Products </Link> </li>
              <li> <Link className=' dropdown-item' to ='/admin/orderlist'> Orders </Link> </li>
   
              
              </NavDropdown>
            )}
        
            <li className='nav-item'>
              <Link className='nav-link ml-auto' to='/HomePresta'> <i className='fas fa-user'></i> Presta </Link>
            </li>
          </ul>
        </div>
      </Nav>
    </header>
  );
};

export default Header;
