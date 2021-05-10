import React from "react";
import { Navbar } from "react-bootstrap";
import { BiCameraMovie } from "react-icons/bi";

function GlobalNavbar(props) {
  return (
    <Navbar className="p-2" bg="primary" variant="dark">
      <Navbar.Brand href="/">
        {" "}
        <BiCameraMovie /> The Shoppies!
      </Navbar.Brand>
    </Navbar>
  );
}

export default GlobalNavbar;
