import React, { useState } from "react";
import "./SB.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <input
        type="text"
        placeholder="City..."
        value={city}
        className="bars"
        onChange={(e) => setCity(e.target.value)}
      />
      <input type="submit" className="lens" value="Search" />
    </form>
  );
}
