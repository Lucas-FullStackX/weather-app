import React from "react";
import "./Cards.css";

import Card from "./Card.jsx";

export default function Cards({ cities, onClose }) {
  if (cities.length === 0) {
    return <div className="any">Check the weather of any city</div>;
  }
  return (
    <div className="cards">
      {cities.map((c) => (
        <Card
          key={c.id}
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
        />
      ))}
    </div>
  );
}
