import jwt, { decode } from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;
  //    console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // console.log("tokenFOund");
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await (await User.findById(decoded.id))
      next();
    //   .select('-password');
      // console.log(decoded);
  
    } catch (error) {
        console.error(error)
        res.status(401)
        throw new Error('Not authorized token failed')
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized no token');
  }
//   next();
});

const admin = (req,res,next)=>{
  if(req.user && req.user.isAdmin){
    next()
  }else{
    res.status(401)
    throw new Error('Not authorized as an admin')
  }

}


export { protect ,admin};
