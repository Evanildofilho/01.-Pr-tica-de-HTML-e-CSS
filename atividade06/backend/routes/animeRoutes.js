// routes/animeRoutes.js
const express = require('express');
const router = express.Router();
const AnimeController = require('../controllers/animeController');

router.post('/animes', AnimeController.create);
router.get('/animes', AnimeController.getAll);
router.get('/animes/:id', AnimeController.getById);
router.put('/animes/:id', AnimeController.update);
router.delete('/animes/:id', AnimeController.delete);

module.exports = router;
