import express from 'express';
import asyncHandler from 'express-async-handler';

const router = express.Router();
import Product from '../models/productModel.js';

// @ fetsh all products
// @ GET  api/products
// @ Public

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
  // res.status(401)
  // throw new Error('bnjkldbfhcdbfjl')
    res.json(products);
  })
);

// @ fetsh single product
// @ GET  api/products/:id
// @ Public
router.get(
  '/:id',

  asyncHandler(async (req, res) => {
const product = await Product.findById(req.params.id);

if (product) {
  res.json(product);
} else {
res.status(404)
throw new Error('Product Not found')
//   .send({ message: 'Product not found' });

}
  })
);

export default router;
// const product = await Product.findById(req.params.id);

// if (product) {
//   res.json(product);
// } else {
//   res.status(404).send({ message: 'Product not found' });
// }
