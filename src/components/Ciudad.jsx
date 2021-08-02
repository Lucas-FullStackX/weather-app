import React from "react";
import "./Ciudad.css";

export default function Ciudad({ city }) {
  if (city) {
    return (
      <div className="ciudad">
        <h2>{city.name}</h2>
        <img
          className="iconoClima"
          src={`https://openweathermap.org/img/wn/${city.img}@2x.png`}
          width="80"
          height="80"
          alt={city.name}
        />
        <span> {celcius(city.temp)} ºC</span>
        <p>
          <b>Weather:</b> {city.weather}
        </p>
        <p>
          <b>Wind:</b> {city.wind} km/h
        </p>
        <p>
          <b>Latitude:</b> {Math.round(city.latitud)}º
        </p>
        <p>
          <b>Length:</b> {Math.round(city.longitud)}º
        </p>
      </div>
    );
  }
  return <div>No existe</div>;
}

function celcius(k) {
  console.log(k);
  return Math.round(k - 273.15);
}
