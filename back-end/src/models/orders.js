module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      orderNfId: { type: DataTypes.STRING, unique: true },
      orderNumber: DataTypes.STRING,
      orderPath: { type: DataTypes.STRING, unique: true },
      orderFileName: { type: DataTypes.STRING, unique: true },
      orderOriginalName: { type: DataTypes.STRING, unique: true },
      emissionDate: DataTypes.STRING,
      pdfFile: DataTypes.STRING,
      emittedTo: DataTypes.STRING,
      nNf: DataTypes.STRING,
      CTE: DataTypes.STRING,
      value: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cnpjId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      buyerId: DataTypes.INTEGER,
      providerId: DataTypes.INTEGER,
      orderStatusBuyer: DataTypes.STRING,
      orderStatusProvider: DataTypes.STRING,
      deliveryReceipt: DataTypes.STRING,
      cargoPackingList: DataTypes.STRING,
      deliveryCtrc: DataTypes.STRING,
    },
    {
      tableName: "orders",
      timestamps: true,
    }
  );

  Order.associate = (models) => {
    Order.belongsTo(models.Buyer, { foreignKey: "buyerId", as: "buyer" });
    Order.belongsTo(models.Cnpj, { foreignKey: "cnpjId", as: "cnpj" });
    Order.belongsTo(models.Provider, { foreignKey: "providerId", as: "provider" });
    Order.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    Order.hasMany(models.OrderPortion, { foreignKey: "orderId", as: "orderPortions" });
    Order.hasOne(models.Offer, { foreignKey: "orderId", as: "offer" });
  };

  return Order;
};
