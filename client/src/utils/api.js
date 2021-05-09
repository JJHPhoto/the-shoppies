import axios from "axios";

const api = {
  async setMovies() {
    return axios.get("/api/movies");
  },

  async addMovie(movie) {
    console.log("added movies", { movie });
    return axios.post("/api/movies", { ...movie });
  },
};

export default api;
