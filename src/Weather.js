import React, {useState} from "react";
// import City from "./City";
import axios from "axios";
import DateTime from "./DateTime";

export default function Weather() {

  const [weatherData, setWeatherData]= useState({ready:false});
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready:true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      tempMax: Math.round(response.data.main.temp_max),
      tempMin: Math.round(response.data.main.temp_min),
      feelsLike: Math.round(response.data.main.feels_like),
      humidity:response.data.main.humidity,
      wind:response.data.wind.speed,
      city:response.data.name
    });
  }

  if (weatherData.ready){
    return (
      <div className="Weather">
        <div className="DateTime">
          <DateTime date={weatherData.date} />
        </div>
        <div className="current-weather">
          <div className="row">
            <img
              src="img/unknown.png"
              className="weather-icon"
              alt=" current weather icon"
            />
          </div>
          <h1>
            <span className="temp-value">{weatherData.temperature}</span>
            <span>
              <button className="celsius"> 
                °C|
              </button>
              <button className="farenheit">
                °F
              </button>
            </span>
          </h1>
          <div className= "row">
            <h2 className="location text-uppercase">{weatherData.city}</h2>
          </div> 
        </div> 
        {/* <div>
          <City location = "MUNICH"/>
        </div> */}
        <div className="weather-description">
          <div className="row">
            <div className="col-3 max-min deg"><strong>{weatherData.tempMax}°/{weatherData.tempMin}°</strong></div>
            <div className="col-2 feels-like deg"><strong>{weatherData.feelsLike}°</strong></div>
            <div className="col-3 humidity deg"><strong>{weatherData.humidity}%</strong></div>
            <div className="col-4 wind deg"><strong>{weatherData.wind} km/h</strong></div>
          </div>
          <div className="row">
            <div className="col-3">Max-Min</div>
            <div className="col-2">Feels like</div>
            <div className="col-3">Humidity</div>
            <div className="col-4">Wind</div>
          </div>
        </div>
      </div>
    );
  } else{  
      let city = "MUNICH";
      const apiKey =`4bf6877c9fd424fd93f8acf13ea89864`;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      axios.get(apiUrl).then(handleResponse);
    
      return(
        <div className="Weather">
          <div className="DateTime">
            <p>Welcome!</p>
          </div>
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
            <div className="row">
              <h2 className="location">loading...</h2>
            </div>
          </div>
          {/* <div>
            <City location = "MUNICH"/>
          </div> */}
          <div className="weather-description">
            <div className="row">
              <div className="col max-min deg"><strong>20°/27°</strong></div>
              <div className="col feels-like deg"><strong>20°/27°</strong></div>
              <div className="col humidity deg"><strong>20°/27°</strong></div>
              <div className="col wind deg"><strong>20°/27°</strong></div>
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
}
