import axios from "axios";
import React, { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

function SearchForm({ setMovies }) {
  const [APIKEY, setAPIKEY] = useState("4829e09f");

  const movieSearch = useRef({ setMovies });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(
        "http://www.omdbapi.com/?t=" +
          movieSearch.current.value +
          "&apikey=" +
          APIKEY
      )
      .then(({ data }) => {
        console.log("Movie Searched!", data);
        setMovies([data]);
      });
  };
  return (
    <Card>
      <Card.Body>
        <h2>Search</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formMovieName">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control
              ref={movieSearch}
              type="text"
              placeholder="Search for a movie"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SearchForm;
