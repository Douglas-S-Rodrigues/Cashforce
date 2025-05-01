module.exports = (sequelize, DataTypes) => {
  const Cnpj = sequelize.define(
    "Cnpj",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cnpj: {
        type: DataTypes.STRING,
        unique: true,
      },
      companyType: DataTypes.STRING,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "cnpjs",
      timestamps: true,
    }
  );

  Cnpj.associate = (models) => {
    Cnpj.hasMany(models.Buyer, { foreignKey: "cnpjId" });
    Cnpj.hasMany(models.Provider, { foreignKey: 'cnpjId' });
    Cnpj.hasMany(models.Sponsor, { foreignKey: 'cnpjId' });
    Cnpj.hasMany(models.Order, { foreignKey: 'cnpjId' });
  };

  return Cnpj;
};
