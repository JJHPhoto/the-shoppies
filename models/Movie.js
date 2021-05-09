const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  imdbID: String,
  Title: String,
  Year: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
