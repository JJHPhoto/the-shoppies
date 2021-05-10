import React, { useEffect, useState } from "react";
import SavedResults from "../components/SavedResults";
import api from "../utils/api";

function Nominated() {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    return api.getMovies().then((res) => {
      setMovies(res.data);
    });
  };

  useEffect(() => {
    getMovies();
  }, [setMovies]);

  return (
    <div>
      <SavedResults movies={movies} getMovies={getMovies} />
    </div>
  );
}

export default Nominated;
