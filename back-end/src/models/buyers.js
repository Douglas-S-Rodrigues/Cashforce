module.export = (sequelize, DataTypes) => {
  const Buyer = sequelize.define(
    "Buyer",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: DataTypes.STRING,
      tradingName: DataTypes.STRING,
      cashforceTax: DataTypes.STRING,
      responsibleName: DataTypes.STRING,
      responsibleEmail: DataTypes.STRING,
      responsiblePosition: DataTypes.STRING,
      responsiblePhone: DataTypes.STRING,
      responsibleMobile: DataTypes.STRING,
      website: DataTypes.STRING,
      postalCode: DataTypes.STRING,
      address: DataTypes.STRING,
      number: DataTypes.STRING,
      complement: DataTypes.STRING,
      neighborhood: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      situation: DataTypes.STRING,
      situationDate: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cnpjId: DataTypes.INTEGER,
      confirm: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
    },
    {
      tableName: "buyers",
      timestamps: true,
    }
  );

  Buyer.associate = (models) => {
    Buyer.belongsTo(models.Cnpjs, {
      foreignKey: "cnpjId",
      as: "cnpj",
    });
    Buyer.hasMany(models.Orders, {
      foreignKey: "orderId",
      as: "orders",
    });
  };

  return Buyer;
};
