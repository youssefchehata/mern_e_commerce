import asyncHandler from 'express-async-handler';

import Order from '../models/orderModel.js';

// @ create new order
// @ POST  api/orders
// @ Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No Order Items');
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

// @ Get order by Id
// @ GET  api/orders/:id
// @ Private
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('order not exist');
  }
});

// @ Get Update order to paid
// @ GET  api/orders/:id/pay
// @ Private
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };
      const updatedOrder = await order.save()
      res.json(updatedOrder)
  
  } else {
    res.status(404);
    throw new Error('order not exist');
  }
});



// @ Get Get logged in user orders
// @ GET  api/orders/myorders
// @ Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({user: req.user._id})
  res.json(orders)
});


// @ Get Get all orders
// @ GET  api/orders
// @ Private ADMIN
const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate('user','id name')
  res.json(orders)
});




// @ Get Update order to delevred
// @ GET  api/orders/:id/deliver
// @ Private / Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

      const updatedOrder = await order.save()
      res.json(updatedOrder)
  
  } else {
    res.status(404);
    throw new Error('order not exist');
  }
});



export { addOrderItems, getOrderById ,updateOrderToPaid,getMyOrders ,getOrders,updateOrderToDelivered};
