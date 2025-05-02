module.exports = (sequelize, DataTypes) => {
  const OrderPortion = sequelize.define(
    "OrderPortion",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nDup: DataTypes.STRING,
      dVenc: DataTypes.STRING,
      vDup: DataTypes.STRING,
      availableToMarket: DataTypes.BOOLEAN,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      orderId: DataTypes.INTEGER,
    },
    {
      tableName: "orderportions",
      timestamps: true,
    }
  );

  OrderPortion.associate = (models) => {
    OrderPortion.belongsTo(models.Order, {
      foreignKey: "orderId",
      as: "order",
    });
  };

  return OrderPortion;
};
