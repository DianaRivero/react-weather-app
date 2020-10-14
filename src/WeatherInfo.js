import React from "react";
import DateTime from "./DateTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
            <div className="DateTime">
                <DateTime currentDate={props.data.date} />
            </div>
            <div className="current-weather">
                <div className="row">
                    <WeatherIcon code={props.data.icon}/>
                </div>
                <h1>
                <WeatherTemperature celsius={props.data.temperature} tempMaxCel={props.data.tempMax} tempMinCel={props.data.tempMin}/>
                <div className= "row">
                    <h2 className="location text-uppercase">{props.data.city}</h2>
                </div> 
            </div> 
            <div className="weather-description">
                <div className="row">
                    <div className="col-3 max-min deg"><strong>{props.data.tempMax}°/{props.data.tempMin}°</strong></div>
                    <div className="col-2 feels-like deg"><strong>{props.data.feelsLike}°</strong></div>
                    <div className="col-3 humidity deg"><strong>{props.data.humidity}%</strong></div>
                    <div className="col-4 wind deg"><strong>{props.data.wind} km/h</strong></div>
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
}