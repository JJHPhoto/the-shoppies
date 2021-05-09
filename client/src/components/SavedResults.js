import React from "react";
import { Button, Card } from "react-bootstrap";

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
                  <h2 className="my-3">"{movie.Title}"</h2>
                  <h3>Release Year:</h3>
                  <p>{movie.Year}</p>
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
