const { Router } = require('express');
const providersController = require('../controllers/providersController');

const router = Router();

router.get('/providers', providersController.getAllProviders);
router.get('/providers/:id', providersController.getProviderById);

module.exports = router;
