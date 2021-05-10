const router = require("express").Router();

const { Movie } = require("../models");

router
  .route("/movies")
  .get((req, res) => {
    Movie.find()
      .then((movies) => res.json(movies))
      .catch((err) => console.log(err));
  })
  .post((req, res) => {
    console.log("Movies req", req.body);

    const { imdbID, Title, Year } = req.body;

    Movie.create({
      imdbID,
      Title,
      Year,
    })
      .then((newMovie) => res.json(newMovie))
      .catch((err) => console.log(err));
  });

router.route("/movies/:id").delete((req, res) => {
  Movie.findByIdAndDelete(req.params.id)
    .then((deleteMovie) => res.json(deleteMovie))
    .catch((err) => console.log(err));
});

module.exports = router;
