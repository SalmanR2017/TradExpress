import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import tradExpressLogo from "../images/TradExpress.png";
import '../Styles/navbar1.css'
const Navbar1 = () => {
     const style = {
       backgroundColor: "#7c20be",
       
     };
  return (
    <Navbar expand="lg" style={style}>
      <Container className="nav-bar">
        <Link to='/'>
          <img src={tradExpressLogo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to='/buy'>Instant Buy/Sell</Link>
            <Link>Learn</Link>
            <Link to="/login">Login</Link>
            <Link to="/getstarted">Get Started</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbar1;
