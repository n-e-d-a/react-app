import React, { useState } from "react";
import axios from "axios";
import "./index.css";

export default function Search() {
  let [text, setText] = useState("");
  let [city, setCity] = useState(null);
  let [icon, setIcon] = useState("");

  function writeText(response) {
    console.log(response.data);
    setText(
      <ul className="text-description">
        <li> Temperature: {Math.round(response.data.main.temp)}°C</li>
        <li> Description: {response.data.weather[0].description}</li>
        <li> Humidity: {response.data.main.humidity}%</li>
        <li>Wind: {Math.round(response.data.wind.speed)}K/h </li>
      </ul>
    );
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function DescriptionWeather(event) {
    event.preventDefault();
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=802a9523a0d10578c154dd32831cb977&units=metric`;
    axios.get(apiurl).then(writeText);
  }

  return (
      <div className="weather-box">
    <div >
      <form onSubmit={DescriptionWeather}>
        <input type="text" placeholder="Enter city" onChange={updateCity} />
        <input type="submit" value="search" />
      </form>
      <div>
        {text}
        <img src={icon} alt=""></img>
      </div>
    </div>
    </div>
  );
}
