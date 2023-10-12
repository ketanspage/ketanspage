import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <div className="footer-links-section">
          <Link to="/about"> About </Link>
          <Link to="/projects"> Projects </Link>
          <a href="mailto:gandhi.ketan55555@gmail.com"> Email </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
