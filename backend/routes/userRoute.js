const express = require('express');
const {
  listProperty,
  getUserDetails,
  investInProperty
} = require('../controllers/userController');
const userRouter = express.Router();

userRouter
  .post('/list-property', listProperty)
  .get('/details', getUserDetails)
  .post('/invest/:propId', investInProperty);

module.exports = userRouter;
