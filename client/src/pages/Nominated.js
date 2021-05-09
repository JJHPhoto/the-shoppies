import React, { useEffect, useState } from "react";
import SavedResults from "../components/SavedResults";
import api from "../utils/api";

function Nominated() {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    return api.getMovies().then((res) => {
      console.log("get movies data", res);
      setMovies(res.data);
    });
  };

  useEffect(() => {
    getMovies();
  }, [setMovies]);

  console.log("nomiated Movies", movies);
  return (
    <div>
      <h1> Nominated Movies</h1>
      <SavedResults movies={movies} getMovies={getMovies} />
    </div>
  );
}

export default Nominated;
