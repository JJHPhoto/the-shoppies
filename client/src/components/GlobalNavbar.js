import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { BiCameraMovie } from "react-icons/bi";

function GlobalNavbar(props) {
  return (
    <Navbar className="p-2" bg="primary" variant="dark">
      <Navbar.Brand href="/">
        {" "}
        <BiCameraMovie /> The Shoppies!
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Search</Nav.Link>
        <Nav.Link href="/nominated">Nominated</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default GlobalNavbar;
