import React from "react";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";
import { TiWeatherPartlySunny } from "react-icons/ti";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/" className="home">
        <TiWeatherPartlySunny />
      </Link>
      <Link className="about" to="/about">
        <span>About</span>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
