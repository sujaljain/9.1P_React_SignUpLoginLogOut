import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Header.css"; // Import the CSS file

function Header() {
  return (
    <>
      <header className="header">
        <div className="logo">DEV@DEAKIN</div>
        <div className="buttons">
          <input type="text" className="search-input" placeholder="Search" />
          <button className="search-button">Post</button>
          <Link to="/Login" className="search-button">
            Login
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;