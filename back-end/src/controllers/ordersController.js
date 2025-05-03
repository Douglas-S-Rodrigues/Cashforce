const orderService = require('../services/ordersService');

const ordersControllers = {

  getAllOrders: async (_req, res) => {
    try {
      const orders = await orderService.getAllOrders();
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao buscar pedidos' });
    }
  },
  
  getOrderById: async (req, res) => {
    const { id } = req.params;
    try {
      const order = await orderService.getOrderById(id);
      if (!order) {
        return res.status(404).json({ message: 'Pedido não encontrado' });
      }
      return res.status(200).json(order);
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao buscar pedido' });
    }
  }

};

module.exports = ordersControllers;
