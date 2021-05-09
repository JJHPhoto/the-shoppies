import React from "react";
import { Jumbotron } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Jumbotron>
        <h1>Welcome to the Shoppies Nominations App!</h1>
        <p>You can search for movies to nominate for the Shoppies.</p>
      </Jumbotron>{" "}
    </div>
  );
}

export default Header;
