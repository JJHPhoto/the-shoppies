const router = require("express").Router();

const { Movie } = require("../models");

router
  .route("/movies")
  .get((req, res) => {
    Movie.find()
      .then((movies) => res.json(moives))
      .catch((err) => console.log(err));
  })
  .post((req, res) => {
    console.log("Movies req", req.body);

    const { imdbID, movieInfo } = req.body;
    const { title, year } = movieInfo;

    Movie.create({
      imdbID,
      title,
      year,
    })
      .then((newMovie) => res.json(newMovie))
      .catch((err) => console.log(err));
  });

module.exports = router;
