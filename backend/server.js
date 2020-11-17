// const express = require('express');
import express from 'express'
// const dotenv = require('dotenv');
import dotenv from 'dotenv'
// const products = require('./data/products');
import products from './data/products.js'

dotenv.config();
const app = express();

app.get('/', (req, res) => {
  res.send('Api is running....');
});
app.get('/api/products', (req, res) => {
  res.json(products);
});
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`server running ${process.env.NODE_ENV} mode in port ${PORT}`));
