import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./navbar.css"



function NavBar() {
  return (
    <>
    <img src="https://i.ibb.co/PMJjywc/viki-logo.png" alt="Logo" className="logo-img" />
    <Navbar expand="lg" className="body-tertiary" bg="dark" variant={"dark"}>
      <Container>

        <Navbar.Brand as={Link} to="/" className="logo" >Öl Beer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/IPA">IPA</Nav.Link>
          <Nav.Link as={Link} to="/Negra">Negra</Nav.Link>
          <Nav.Link as={Link} to="/Blonde">Blonde</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartWidget/>
    </Navbar>
    </>
  );
}

export default NavBar;


//https://i.ibb.co/PMJjywc/viki-logo.png