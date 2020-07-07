import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/" className="router-link">
          <li>Home</li>
        </Link>
        <Link to="/about" className="router-link">
          <li>About</li>
        </Link>
        <Link to="/contacts" className="router-link">
          <li>Contacts</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
