import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectedDB from './config/db.js'


dotenv.config();

connectDB()


const importData = async ()=>{
    try {
        await     Order.deleteMany()
        await     Product.deleteMany()
        await     User.deleteMany()


    const createdUser =    await    User.insertMany(users)
    
    } catch (error) {
        
    }
}