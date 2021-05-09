import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";

function SearchPage() {
  const [movies, setMovies] = useState([]);
  console.log("Movies", movies);
  return (
    <div>
      <SearchForm setMovies={setMovies} />
      <Results movies={movies} />
    </div>
  );
}

export default SearchPage;
