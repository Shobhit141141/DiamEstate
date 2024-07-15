const express = require('express');
const {
  listProperty,
  getUserDetails,
  investInProperty,
  fundAccountWithTestDiam
} = require('../controllers/userController');
const userRouter = express.Router();

userRouter
  .post('/list-property', listProperty)
  .get('/details', getUserDetails)
  .post('/invest/:propId', investInProperty)
  .get('/fund-account', fundAccountWithTestDiam);

module.exports = userRouter;
