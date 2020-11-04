// import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Routes from './Routes';
ReactDOM.render(
  <React.StrictMode>
    
    <Router >
    <App >
        
    <Routes /> 
    </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
