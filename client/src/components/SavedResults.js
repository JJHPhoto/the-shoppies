import React from "react";
import { Card } from "react-bootstrap";
import RemoveButton from "./RemoveButton";

function SavedResults({ nominated, getNominated }) {
  return (
    nominated.length > 0 && (
      <Card className="my-4">
        <Card.Body>
          <div>
            <h2> Nominated Movies </h2>
            {nominated.map((movie) => (
              <Card className="my-4" key={movie._id}>
                <Card.Body>
                  <h2 className="my-3">
                    {movie.Title}({movie.Year})
                  </h2>
                  <RemoveButton
                    movieId={movie._id}
                    getNominated={getNominated}
                    className="ml-2"
                  />
                </Card.Body>
              </Card>
            ))}
          </div>
        </Card.Body>
      </Card>
    )
  );
}

export default SavedResults;
