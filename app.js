const express = require('express');
const router = express.Router();

// Banco de dados em memória
let animes = [];
let nextId = 1; // Para gerar IDs automaticamente

// Função para validar os dados do anime
function validateAnime(anime) {
    if (!anime.name || !anime.genre || !anime.studio) {
        return 'Todos os campos (name, genre, studio) são obrigatórios.';
    }
    return null;
}

// Rota para criar um anime
router.post('/animes', (req, res) => {
    const { name, genre, studio } = req.body;

    // Validação dos dados
    const error = validateAnime(req.body);
    if (error) {
        return res.status(400).json({ error });
    }

    // Criação do anime com ID gerado automaticamente
    const newAnime = {
        id: nextId++,
        name,
        genre,
        studio
    };
    
    animes.push(newAnime);
    res.status(201).json(newAnime);
});

// Rota para atualizar um anime
router.put('/animes/:id', (req, res) => {
    const { id } = req.params;
    const { name, genre, studio } = req.body;

    // Encontrar o anime pelo ID
    const animeIndex = animes.findIndex(anime => anime.id === parseInt(id));

    if (animeIndex === -1) {
        return res.status(404).json({ error: 'Anime não encontrado.' });
    }

    // Validação dos dados
    const error = validateAnime(req.body);
    if (error) {
        return res.status(400).json({ error });
    }

    // Atualização do anime
    const updatedAnime = {
        id: animes[animeIndex].id, // Mantém o ID original
        name: name || animes[animeIndex].name,
        genre: genre || animes[animeIndex].genre,
        studio: studio || animes[animeIndex].studio
    };

    animes[animeIndex] = updatedAnime;
    res.json(updatedAnime);
});

// Rota para listar todos os animes
router.get('/animes', (req, res) => {
    res.json(animes);
});

// Rota para listar um anime por ID
router.get('/animes/:id', (req, res) => {
    const { id } = req.params;
    const anime = animes.find(anime => anime.id === parseInt(id));

    if (!anime) {
        return res.status(404).json({ error: 'Anime não encontrado.' });
    }

    res.json(anime);
});

// Rota para deletar um anime
router.delete('/animes/:id', (req, res) => {
    const { id } = req.params;
    const animeIndex = animes.findIndex(anime => anime.id === parseInt(id));

    if (animeIndex === -1) {
        return res.status(404).json({ error: 'Anime não encontrado.' });
    }

    animes.splice(animeIndex, 1);
    res.json({ message: 'Anime deletado com sucesso.' });
});

module.exports = router;
