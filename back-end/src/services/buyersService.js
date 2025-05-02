const { Buyer, Cnpj } = require('../models');

const buyersService = {
  async getAll() {
    const buyers = await Buyer.findAll({
      include: { model: Cnpj, as: 'cnpj' }
    });
    return buyers;
  }
};

module.exports = buyersService;