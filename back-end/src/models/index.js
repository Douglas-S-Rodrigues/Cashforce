const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql://root:5054901@localhost:3306/cashforce_v3'); // configure o Sequelize aqui

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Buyer = require('./buyers')(sequelize, DataTypes);
db.Cnpj = require('./cnpj')(sequelize, DataTypes);
db.Offer = require('./offers')(sequelize, DataTypes);
db.Order = require('./orders')(sequelize, DataTypes);
db.OrderPortion = require('./orderportions')(sequelize, DataTypes);
db.Provider = require('./providers')(sequelize, DataTypes);
db.Sponsor = require('./sponsors')(sequelize, DataTypes);
db.User = require('./users')(sequelize, DataTypes);

Object.values(db).forEach((model) => {
  if (model.associate) model.associate(db);
});

module.exports = db;