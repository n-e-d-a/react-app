import React from "react";
import axios from "axios";

export default function Weather(props) {
function handle(response){
    alert(`the weather in ${props.city} is ${response.data.main.temp}`);
}

    let apikey="802a9523a0d10578c154dd32831cb977";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apikey}`;
  axios.get(apiUrl).then(handle);
    return <h2> Hello from weather</h2>;
}
