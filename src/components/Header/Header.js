import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const cartIcon = <FontAwesomeIcon icon={faCartShopping} />;
  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <img className="logo" src={logo} alt="" />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <Link to="/blogs">Blogs</Link>
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
            <span
            >
              {cartIcon}
            </span>
            <span>
              <Link to="/login">Login</Link>
            </span>
            <span>
              <small style={{marginRight: '.5rem'}}>/</small>
              <Link to="/register">Register</Link>
            </span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
