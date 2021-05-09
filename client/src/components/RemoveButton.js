import React from "react";
import { Button } from "react-bootstrap";
import api from "../utils/api";

function RemoveButton({ imdbID, getMovies, ...props }) {
  const removeMovie = () => {
    api
      .removeMovie(imdbID)
      .then((movie) => {
        console.log("removed!", movie);
        return getMovies();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("removeMovie", imdbID);
  return (
    <Button onClick={removeMovie} {...props}>
      Remove
    </Button>
  );
}

export default RemoveButton;
