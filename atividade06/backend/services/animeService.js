// services/animeService.js
const Anime = require('../models/anime');

let animes = [];
let nextId = 1; // Para gerar IDs automaticamente

class AnimeService {
    static createAnime(data) {
        if (!data.name || !data.genre || !data.studio) {
            throw new Error('Todos os campos (name, genre, studio) são obrigatórios.');
        }

        const newAnime = new Anime(nextId++, data.name, data.genre, data.studio);
        animes.push(newAnime);
        return newAnime;
    }

    static getAllAnimes() {
        return animes;
    }

    static getAnimeById(id) {
        const anime = animes.find(anime => anime.id === id);
        if (!anime) {
            throw new Error('Anime não encontrado.');
        }
        return anime;
    }

    static updateAnime(id, data) {
        const animeIndex = animes.findIndex(anime => anime.id === id);
        if (animeIndex === -1) {
            throw new Error('Anime não encontrado.');
        }

        if (!data.name && !data.genre && !data.studio) {
            throw new Error('Pelo menos um campo deve ser fornecido para atualização.');
        }

        const anime = animes[animeIndex];
        anime.name = data.name || anime.name;
        anime.genre = data.genre || anime.genre;
        anime.studio = data.studio || anime.studio;

        return anime;
    }

    static deleteAnime(id) {
        const animeIndex = animes.findIndex(anime => anime.id === id);
        if (animeIndex === -1) {
            throw new Error('Anime não encontrado.');
        }
        animes.splice(animeIndex, 1);
    }
}

module.exports = AnimeService;
