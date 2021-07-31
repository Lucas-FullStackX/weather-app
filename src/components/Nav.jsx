import React from "react";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/">
        <img
          id="logoHenry"
          src="https://hypernoir.com/wp-content/uploads/2020/11/Henry.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
      </Link>
      <Link className="about" to="/about">
        <span>About</span>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
