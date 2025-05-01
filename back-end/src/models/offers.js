module.exports = (sequelize, DataTypes) => {
  const Offer = sequelize.define(
    "Offer",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      tax: DataTypes.STRING,
      tariff: DataTypes.STRING,
      adValorem: DataTypes.STRING,
      float: DataTypes.STRING,
      iof: DataTypes.STRING,
      expiresIn: DataTypes.DATE,
      paymentStatusSponsor: DataTypes.BOOLEAN,
      paymentStatusProvider: DataTypes.BOOLEAN,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      orderId: DataTypes.INTEGER,
      sponsorId: DataTypes.INTEGER,
    },
    {
      tableName: "offers",
      timestamps: true,
    }
  );

  Offer.associate = (models) => {
    Offer.belongsTo(models.Order, { foreignKey: "orderId", as: "order" });
    Offer.belongsTo(models.Sponsor, { foreignKey: "sponsorId", as: "sponsor" });
  };

  return Offer;
};
