const app = require('./app');
const { sequelize } = require('./models');

const PORT = 3000;

sequelize.sync({ force: false })
  .then(() => {
    console.log('banco iniciado');
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('error', err);
  });