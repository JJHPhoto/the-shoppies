import React from "react";
import { Card } from "react-bootstrap";
import NominateButton from "./NominateButton";

function Results({ movies, getNominated }) {
  // console.log("results movies", movies);
  return (
    movies.length > 0 && (
      <Card className="my-4">
        <Card.Body>
          <div>
            <h2>Search Results</h2>
            {movies.map((movie) => (
              <Card key={movie.imdbID}>
                <Card.Body>
                  <h2 className="my-3">
                    {movie.Title} ({movie.Year})
                  </h2>
                  <NominateButton movie={movie} getNominated={getNominated} />
                </Card.Body>
              </Card>
            ))}
          </div>
        </Card.Body>
      </Card>
    )
  );
}

export default Results;
