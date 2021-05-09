import React, { useEffect, useState } from "react";
import SearchForm from "../components/SearchForm";
import Results from "../components/Results";
import Nominated from "./Nominated";
// import SavedResults from "../components/SavedResults";
// import api from "../utils/api";

function SearchPage() {
  const [movies, setMovies] = useState([]);
  console.log("Movies", movies);

  // const getMovies = () => {
  //   return api.getMovies().then((res) => {
  //     console.log("get movies data", res);
  //     setMovies(res.data);
  //   });
  // };

  // useEffect(() => {
  //   getMovies();
  // }, [setMovies]);

  // console.log("nominated Movies on page", movies);
  return (
    <div>
      <SearchForm setMovies={setMovies} />
      <Results movies={movies} />
      <Nominated />
      {/* <SavedResults movies={movies} getMovies={getMovies} /> */}
    </div>
  );
}

export default SearchPage;
