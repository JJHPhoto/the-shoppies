import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";
import SavedResults from "../components/SavedResults";
import api from "../utils/api";

function SearchPage() {
  const [movies, setMovies] = useState([]);
  console.log("Movies", movies);

  const [nominated, setNominated] = useState([]);

  const doneNominating = nominated.length >= 5;

  const getNominated = () => {
    return api.getMovies().then((res) => {
      console.log("get movies data", res);
      setNominated(res.data);
    });
  };

  useEffect(() => {
    getNominated();
  }, [setNominated]);

  return (
    <div>
      {doneNominating && (
        <div>
          <h2>You have nominated your 5 movies!</h2>
        </div>
      )}
      <SearchForm setMovies={setMovies} />
      <Results movies={movies} getNominated={getNominated} />
      <SavedResults nominated={nominated} getNominated={getNominated} />
    </div>
  );
}

export default SearchPage;
