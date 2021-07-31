import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="aboutContend">
      <h2>Weather App</h2>
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d58eb146152113.584973d61bdcf.gif"
        alt="gif"
      />
      <p>
        Hi, I'm Lucas Leguizamo, this is my first app made with React JS, here
        you can check the weather and a couple of extra information.
        <br />
        If you liked me and want to see more of my projects, do not hesitate to
        contact me
      </p>
    </div>
  );
}
