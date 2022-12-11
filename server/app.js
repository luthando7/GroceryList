'use strict';

const express = require('express');
const app = express();

const shopRoutes = require('./src/routes/shops.route');

const PORT = 3000;

app.use('/', shopRoutes);

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})