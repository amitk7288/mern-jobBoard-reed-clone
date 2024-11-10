import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

// protect routes so only logged in users can see them
const protect = asyncHandler(async (req, res, next) => {
  let token;

  // we use jwt because this is what we called our cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select('-password');
      next();

    } catch (error) {
          res.status(401);
          throw new Error("no valid token");
    }
  } else {
    res.status(401);
    throw new Error('not auth, no token');
  }
});

export { protect };