const { Router } = require('express');
const buyersController = require('../controllers/buyersController');

const buyer = Router();

buyer.get('/', buyersController.getAll);

module.exports = buyer;