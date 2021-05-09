import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { BiCameraMovie } from "react-icons/bi";

function GlobalNavbar(props) {
  return (
    <Navbar className="p-2" bg="primary" variant="dark">
      <Navbar.Brand href="#home">
        {" "}
        <BiCameraMovie /> The Shoppies!
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Search</Nav.Link>
        <Nav.Link href="/saved">Saved</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default GlobalNavbar;
