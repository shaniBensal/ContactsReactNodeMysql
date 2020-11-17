import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Nav>
        <h4 className="text-white logo-font">My Organizer</h4>
      </Nav>
      {/* <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav> */}
    </Navbar>
  );
};

export default NavBar;
