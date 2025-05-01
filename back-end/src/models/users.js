module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      phoneNumber: DataTypes.STRING,
      mobile: DataTypes.STRING,
      departament: DataTypes.STRING,
      verificationCode: DataTypes.STRING,
      emailChecked: DataTypes.BOOLEAN,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      cashforceAdm: DataTypes.BOOLEAN,
    },
    {
      tableName: "users",
      timestamps: true,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Order, { foreignKey: "userId", as: "orders" });
  };

  return User;
};
