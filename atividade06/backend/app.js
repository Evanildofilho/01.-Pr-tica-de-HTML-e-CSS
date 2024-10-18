const express = require('express');
const animeRoutes = require('./routes/animeRoutes');
const app = express();

app.use(express.json()); // Para que o Express entenda JSON
app.use(animeRoutes);

module.exports = app;
