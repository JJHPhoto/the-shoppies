import React from "react";
import { Card } from "react-bootstrap";
import RemoveButton from "./RemoveButton";

function SavedResults({ movies, getMovies }) {
  return (
    <Card className="my-4">
      <Card.Body>
        {movies.length ? (
          <div>
            <h2> Results </h2>
            {movies.map((movie) => (
              <Card className="my-4" key={movies.imdbID}>
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <h2 className="my-3">
                    {movie.Title}({movie.Year})
                  </h2>
                  <RemoveButton
                    imdbID={movies.imdbID}
                    getMovies={getMovies}
                    className="ml-2"
                  />
                </Card.Body>
              </Card>
            ))}
          </div>
        ) : (
          <div>
            <h2> No Movie Found</h2>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default SavedResults;
