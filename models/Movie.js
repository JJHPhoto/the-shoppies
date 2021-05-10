const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  id: String,
  imdbID: String,
  Title: String,
  Year: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
