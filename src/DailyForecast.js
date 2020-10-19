import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props){
    function days() {
        let date = new Date(props.dataDay.dt * 1000);
        let days = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];
        let day = days[date.getDay()];
        return (`${day}`);
      }

    function temperature() {
        let tempMax = Math.round(props.dataDay.temp.max);
        let tempMin = Math.round(props.dataDay.temp.min);
        return `${tempMax}°/${tempMin}°`;
      }
    return (
        <div className="DailyForecast">
            <div>{days()}</div>
            <WeatherIcon code={props.dataDay.weather[0].icon}/>  
            <div className="deg-days"> <strong>{temperature()}</strong></div>
        </div>
    )
}
