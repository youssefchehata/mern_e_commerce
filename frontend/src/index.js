// import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
ReactDOM.render(
  <BrowserRouter>

      <App>
     <Routes/>
      </App>
   
  </BrowserRouter>,
  document.getElementById('root')
);
