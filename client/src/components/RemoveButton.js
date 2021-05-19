import React from "react";
import { Button } from "react-bootstrap";
import api from "../utils/api";

function RemoveButton({ movieId, getNominated, ...props }) {
  const removeMovie = () => {
    api
      .removeMovie(movieId)
      .then((movie) => {
        return getNominated();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Button onClick={removeMovie} {...props}>
      Remove
    </Button>
  );
}

export default RemoveButton;
