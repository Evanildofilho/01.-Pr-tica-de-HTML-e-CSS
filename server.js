const express = require('express');
const app = express();
const animeRoutes = require('./app');

app.use(express.json()); // Para que o Express entenda JSON
app.use(animeRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
