import React from "react";
import City from "./City";
export default function Weather() {
  return (
    <div className="Weather">
      <div className="current-weather">
        <div className="row">
          <img
            src="img/unknown.png"
            className="weather-icon"
            alt=" current weather icon"
          />
        </div>
        <h1>
          <span className="temp-value">--</span>
          <span>
            <button className="celsius"> 
              °C|
            </button>
            <button className="farenheit">
              °F
            </button>
          </span>
        </h1>
        <City />
      </div>
      <div className="weather-description">
        <div className="row">
          <div className="col max-min">-</div>
          <div className="col feels-like">-</div>
          <div className="col humidity">-</div>
          <div className="col wind">-</div>
        </div>
        <div className="row">
          <div className="col">Max-Min</div>
          <div className="col">Feels like</div>
          <div className="col">Humidity</div>
          <div className="col">Wind</div>
        </div>
      </div>
    </div>
  );
}
