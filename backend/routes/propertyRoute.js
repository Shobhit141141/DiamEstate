const express = require('express');
const { getAllProperty } = require('../controllers/propertyController');

const propertyRouter = express.Router();

propertyRouter.get('/get-all', getAllProperty);

module.exports = propertyRouter;
