const { Order } = require('../models');

const getAllOrders = async () => {
  const orders = await Order.findAll();
  return orders;
};

const getOrderById = async (id) => {
  const order = await Order.findByPk(id);
  return order;
};

module.exports = {
  getAllOrders,
  getOrderById,
};