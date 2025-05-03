const providerService = require('../services/providersService');

const getAllProviders = async (_req, res) => {
  try {
    const providers = await providerService.getAllProviders();
    return res.status(200).json(providers);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar fornecedores' });
  }
};

const getProviderById = async (req, res) => {
  const { id } = req.params;
  try {
    const provider = await providerService.getProviderById(id);
    if (!provider) {
      return res.status(404).json({ message: 'Fornecedor não encontrado' });
    }
    return res.status(200).json(provider);
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao buscar fornecedor' });
  }
};

const providersController = {
  getAllProviders,
  getProviderById,
};

module.exports = providersController;
