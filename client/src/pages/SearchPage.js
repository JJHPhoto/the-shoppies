import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";
import SavedResults from "../components/SavedResults";
import api from "../utils/api";

function SearchPage({ movie }) {
  const [movies, setMovies] = useState([]);

  const [nominated, setNominated] = useState([]);

  const doneNominating = nominated.length >= 5;

  const nominatedMovies = nominated.map((movie) => movie.imdbID);

  const getNominated = () => {
    return api.getMovies().then((res) => {
      setNominated(res.data);
    });
  };

  useEffect(() => {
    getNominated();
  }, [setNominated]);

  return (
    <div>
      <SearchForm setMovies={setMovies} />
      <Results
        movies={movies}
        getNominated={getNominated}
        nominatedMovies={nominatedMovies}
        doneNominating={doneNominating}
      />
      {doneNominating && (
        <div>
          <h2 className="my-3">You have nominated your 5 movies!</h2>
        </div>
      )}
      <SavedResults nominated={nominated} getNominated={getNominated} />
    </div>
  );
}

export default SearchPage;
