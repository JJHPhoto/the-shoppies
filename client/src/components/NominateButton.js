import React from "react";
import { Button } from "react-bootstrap";
import api from "../utils/api";

function NominateButton({ movie, getNominated, doneNominating }) {
  const nominateMovie = () => {
    api
      .addMovie(movie)
      .then((data) => {
        console.log("movie data", data);
        console.log("yes, movie nomiated");
        return getNominated();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("Nominated Movie Button", movie);
  return (
    <Button disabled={doneNominating} onClick={nominateMovie}>
      Nominate
    </Button>
  );
}

export default NominateButton;
