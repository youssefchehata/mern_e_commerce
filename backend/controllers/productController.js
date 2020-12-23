import asyncHandler from 'express-async-handler';

import Product from '../models/productModel.js';

// @ fetsh all products
// @ GET  api/products
// @ Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  // res.status(401)
  // throw new Error('bnjkldbfhcdbfjl')
  res.json(products);
});

// @ fetsh single product
// @ GET  api/products/:id
// @ Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product Not found');
    //   .send({ message: 'Product not found' });
  }
});


// @ Delete a  product
// @ Delete  api/products/:id
// @ Private /Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove()
    res.json({message: 'Product Removed'})
  } else {
    res.status(404);
    throw new Error('Product Not found');
    //   .send({ message: 'Product not found' });
  }
});

export { getProducts, getProductById ,deleteProduct};
// const product = await Product.findById(req.params.id);

// if (product) {
//   res.json(product);
// } else {
//   res.status(404).send({ message: 'Product not found' });
// }
