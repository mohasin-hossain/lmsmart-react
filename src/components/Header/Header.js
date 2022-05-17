import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const cartIcon = <FontAwesomeIcon icon={faCartShopping} />;
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;

  return (
    <header>
      <Navbar bg="light" expand="xl" fixed="top">
        <Container fluid>
          <img className="logo" src={logo} alt="" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-4 my-xl-0" navbarScroll>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/courses">Courses</Link>
              <Link to="/contact">Contact</Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2 search-input"
                aria-label="Search"
              />
              <button>{searchIcon}</button>
            </Form>
            <div className="login-section">
              <span>{cartIcon}</span>
              <span>
                <Link to="/login">Login</Link>
              </span>
              <span>
                <small style={{ marginRight: ".5rem" }}>/</small>
                <Link to="/register">Register</Link>
              </span>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
