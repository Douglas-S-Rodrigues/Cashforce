const { Buyer } = require('../models');

const buyersService = {
  async getAll() {
    const buyer = await Buyer.findAll();
    return buyer;
  }
}

module.exports = buyersService;