// controllers/animeController.js
const AnimeService = require('../services/animeService');

class AnimeController {
    static create(req, res) {
        try {
            const newAnime = AnimeService.createAnime(req.body);
            res.status(201).json(newAnime);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static getAll(req, res) {
        const animes = AnimeService.getAllAnimes();
        res.json(animes);
    }

    static getById(req, res) {
        try {
            const anime = AnimeService.getAnimeById(parseInt(req.params.id));
            res.json(anime);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    static update(req, res) {
        try {
            const updatedAnime = AnimeService.updateAnime(parseInt(req.params.id), req.body);
            res.json(updatedAnime);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    static delete(req, res) {
        try {
            AnimeService.deleteAnime(parseInt(req.params.id));
            res.json({ message: 'Anime deletado com sucesso.' });
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

module.exports = AnimeController;
