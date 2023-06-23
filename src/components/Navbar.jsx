import React from "react";
import "./Navbar.css"; // import the CSS file
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <h3 className="logo">🏠Home</h3>
      </Link>
    </nav>
  );
};

export default Navbar;
