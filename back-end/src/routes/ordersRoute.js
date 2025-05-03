const { Router } = require('express');
const ordersController = require('../controllers/ordersController');

const router = Router();

router.get('/', ordersController.getAllOrders);
router.get('/:id', ordersController.getOrderById);

module.exports = router;