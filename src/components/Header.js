import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg collapseOnSelect">
        <Container>
          <Link to="/">
            <Navbar.Brand>King's WareHouse </Navbar.Brand>
          </Link>
          <Link to="/products">
            <Navbar.Brand>Products-List </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav ClassName="ml-auto">
              <Link to="/cart">
                <Nav.Link></Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </header>
  );
};

export default Header;
