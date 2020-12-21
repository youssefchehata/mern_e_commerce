import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoutes     from './routes/userRoutes.js'
import orderRoutes     from './routes/orderRoutes.js'
import {notFound,errorHandler} from './middleware/errorMiddleware.js'
dotenv.config();

connectDB();

const app = express();
app.use(express.json())
app.get('/', (req, res) => { res.send('Api is running....'); });

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal',(req,res)=>res.send(process.env.PAYPAL_CLIENT_ID))
//custom error handler in middleware
app.use(notFound)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `server running ${process.env.NODE_ENV} mode in port ${PORT}`.yellow.bold
  )
);
