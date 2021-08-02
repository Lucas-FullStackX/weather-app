import React, { useState } from "react";

import { Route } from "react-router-dom";

import "./App.css";
import Nav from "./components/Nav.jsx";
import Cards from "./components/Cards.jsx";
import About from "./components/About.jsx";
import Ciudad from "./components/Ciudad.jsx";
const apiKey = process.env.REACT_APP_KEY;
const URL = process.env.PUBLIC_URL;
function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`
    )
      .then((r) => r.json())
      .then((recurso) => {
        let city = cities.find((i) => i.name === recurso.name);
        if (city) {
          return;
        }
        if (recurso.main !== undefined) {
          const ciudad = {
            min: celcius(recurso.main.temp_min),
            max: celcius(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function celcius(k) {
    console.log(k);
    return Math.round(k - 273.15);
  }
  return (
    <div className="App">
      <Route path={URL + "/"} render={() => <Nav onSearch={onSearch} />} />
      <Route path={URL + "/about"} component={About} />
      <Route
        path="/"
        exact
        render={() => <Cards cities={cities} onClose={onClose} />}
      />
      <Route
        exact
        path={URL + "/ciudad/:Id"}
        render={({ match }) => (
          <Ciudad
            city={cities.filter((c) => c.id === parseInt(match.params.Id))[0]}
          />
        )}
      />
    </div>
  );
}

export default App;
