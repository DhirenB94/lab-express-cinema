const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')


router.get('/movie', async (req, res) => {
    let moviesFromDB = await Movie.find()
    res.render('movies-list', {moviesFromDB})
});

router.get('/movie/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await Movie.findById(movieId);
    res.render('movie-details', {movie})
})

module.exports = router;
