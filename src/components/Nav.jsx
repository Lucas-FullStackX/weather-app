import React from "react";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Link } from "react-router-dom";
import { TiWeatherPartlySunny } from "react-icons/ti";
const URL = process.env.PUBLIC_URL;

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to={URL + "/"} className="home">
        <TiWeatherPartlySunny />
      </Link>
      <Link className="about" to={URL + "/about"}>
        <span>About</span>
      </Link>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
