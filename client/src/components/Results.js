import React from "react";
import { Card } from "react-bootstrap";
import NominateButton from "./NominateButton";

function Results({ movies }) {
  console.log("results movies", movies);
  return (
    <Card className="my-4">
      <Card.Body>
        {movies.length ? (
          <div>
            <h2>Search Results</h2>
            {movies.map((movie) => (
              <Card key={movie.imdbID}>
                <Card.Body>
                  <h2 className="my-3">
                    {movie.Title} ({movie.Year})
                  </h2>
                  <NominateButton movie={movie} />
                </Card.Body>
              </Card>
            ))}
          </div>
        ) : (
          <div>
            <h2>Search Results</h2>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default Results;
