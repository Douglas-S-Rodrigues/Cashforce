const buyersService = require('../services/buyersService')

const buyersController = {
  async getAll(_req, res) {
    const buyers = await buyersService.getAll();
    return res.status(200).json(buyers);
  }
}


module.exports = buyersController;