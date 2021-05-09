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

    const { id, movieInfo } = req.body;
    const { title, plot, poster } = movieInfo;
    const image = poster;

    Movie.create({
      id,
      title,
      plot,
      poster,
    })
      .then((newMovie) => res.json(newMovie))
      .catch((err) => console.log(err));
  });

module.exports = router;
