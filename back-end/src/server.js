const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());


app.get('/api/hello', (req, res) => {
  res.json({ message: 'Olá do servidor Express!' });
});


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
