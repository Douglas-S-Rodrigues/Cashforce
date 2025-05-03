const { Provider } = require('../models');

const getAllProviders = async () => {
  const providers = await Provider.findAll();
  return providers;
};

const getProviderById = async (id) => {
  const provider = await Provider.findByPk(id);
  return provider;
};

module.exports = {
  getAllProviders,
  getProviderById,
};
