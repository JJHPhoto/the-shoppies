import React from "react";
import { Button } from "react-bootstrap";
import api from "../utils/api";

function NominateButton({ movie, getNominated, doneNominating }) {
  const nominateMovie = () => {
    api
      .addMovie(movie)
      .then((data) => {
        return getNominated();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Button disabled={doneNominating} onClick={nominateMovie}>
      Nominate
    </Button>
  );
}

export default NominateButton;
