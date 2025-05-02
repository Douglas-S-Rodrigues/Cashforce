const express = require('express');
const buyer = require('./routes/buyersRoute');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/', buyer);

module.exports = app;