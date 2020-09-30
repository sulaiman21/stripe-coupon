import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link
            to="/"
            style={{ color: "#fff", textDecoration: "none", marginLeft: 20 }}
          >
            Home
          </Link>
          <Link
            to="/"
            style={{ color: "#fff", textDecoration: "none", marginLeft: 20 }}
          >
            Link
          </Link>
        </Nav>
        <div style={{ marginRight: 10 }}>
          <Link
            to="/"
            style={{ color: "#fff", textDecoration: "none", marginLeft: 20 }}
          >
            User Name
          </Link>
        </div>
        <Button variant="outline-light">Logout</Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default React.memo(NavbarComponent);
