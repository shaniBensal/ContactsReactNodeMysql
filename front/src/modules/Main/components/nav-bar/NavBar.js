import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="/">
        <h4 className="text-white logo-font">My Organizer</h4>
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBar;
