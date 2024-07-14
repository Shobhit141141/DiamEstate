const express = require('express');
const { listProperty } = require('../controllers/userController');
const userRouter = express.Router();

userRouter.post('/list-property', listProperty)