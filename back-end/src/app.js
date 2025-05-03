const express = require('express');

const buyer = require('./routes/buyersRoute');
const orders = require('./routes/ordersRoute');
const providers = require('./routes/providersRoute');

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/buyers', buyer);
app.use('/orders', orders);
app.use('/', providers);

module.exports = app;