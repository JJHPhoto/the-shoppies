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
        "https://www.omdbapi.com/?t=" +
          movieSearch.current.value +
          "&apikey=" +
          APIKEY
      )
      .then(({ data }) => {
        setMovies([data]);
      });
  };
  return (
    <Card>
      <Card.Body>
        <h2 className="my-1">Movie Name</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formMovieName">
            <Form.Control
              ref={movieSearch}
              type="text"
              placeholder="Search for a movie"
            />
          </Form.Group>
          <Button className="my-2" variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SearchForm;
