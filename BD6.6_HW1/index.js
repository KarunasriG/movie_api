const cors = require('cors');
const express = require('express');
const { getAllMovies, getMovieById } = require('./controllers');

const app = express();

app.use(cors());
app.use(express.json());

// get all movies
app.get('/movies', async (req, res) => {
  const movies = getAllMovies();
  res.json({ movies });
});

// get a movie by ID
app.get('/movies/details/:id', async (req, res) => {
  const movie = getMovieById(parseInt(req.params.id));
  res.json({ movie });
});

module.exports = { app };
