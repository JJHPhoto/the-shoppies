import axios from "axios";

const api = {
  async getMovies() {
    return axios.get("/api/movies");
  },

  async addMovie(movie) {
    console.log("added movies", { movie });
    return axios.post("/api/movies", { ...movie });
  },

  async removeMovie(imdbID) {
    return axios.delete(`/api/movies/${imdbID}`);
  },
};

export default api;
