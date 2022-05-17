import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'
import logo from "../../images/logo.png";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="d-flex flex-column justify-content-start">
        <img className="mb-3" src={logo} alt="" />
        <p className="text-muted">We support programs that create advancement for people</p>
      </div>
      <div className="d-flex flex-column">
        <h3>Useful Links</h3>
        <Link className="mb-2 links text-muted" to="/about">About Us</Link>
        <Link className="mb-2 links text-muted" to="/about">Privacy & policy</Link>
        <Link className="mb-2 links text-muted" to="/about">Terms & conditions</Link>
        <Link className="mb-2 links text-muted" to="About">Student Spotlight</Link>
      </div>
      <div className="d-flex flex-column">
        <h3>Learning</h3>
        <Link className="mb-2 links text-muted" to="/courses">Business Strategy</Link>
        <Link className="mb-2 links text-muted" to="/courses">Become A Teacher</Link>
        <Link className="mb-2 links text-muted" to="/courses">Project Management</Link>
        <Link className="mb-2 links text-muted" to="/courses">Membership</Link>
      </div>
      <div className="d-flex flex-column">
        <h3>Contact Us</h3>
        <Link to="/contact" className="mb-2 links text-muted" >+91 458 654 528</Link>
        <Link to="/contact" className="mb-2 links text-muted" >info@example.com</Link>
        <Link to="/contact" className="mb-2 links text-muted" >PO Box 16122 Collins Street West Victoria 8007 Australia</Link>
      </div>
    </footer>
  );
};

export default Footer;
