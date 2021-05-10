import axios from "axios";

const api = {
  async getMovies() {
    return axios.get("/api/movies");
  },

  async addMovie(movie) {
    return axios.post("/api/movies", { ...movie });
  },

  async removeMovie(movieId) {
    return axios.delete(`/api/movies/${movieId}`);
  },
};

export default api;
