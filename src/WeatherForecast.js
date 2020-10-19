import React, {useState} from "react";
import axios from "axios";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";

export default function WeatherForecast(props){
    const [loaded,setLoaded]= useState(false);
    const [forecast,setForecast]=useState(null);
    
    function handleForecastResponse(response){
        setForecast(response.data);
        console.log(forecast);
        setLoaded(true);
    }
    
    if (loaded && props.latitude === forecast.lat && props.longitude === forecast.lon){
        return (
            <div className = "WeatherForecast">
                <div className ="temp-hours row">
                    {forecast.hourly.slice(1,5).map(function(HourlyForecastItem){
                        return(
                            <HourlyForecast data={HourlyForecastItem}/> );   
                    })} 
                </div>
                <div className ="temp-week-days row">
                    {forecast.daily.slice(1,5).map(function(DailyForecastItem){
                        return(
                            <DailyForecast dataDay={DailyForecastItem}/> );   
                    })} 
                </div>
            </div>
     );
    }else{
        const apiKey =`4bf6877c9fd424fd93f8acf13ea89864`;
        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=current,minutely&appid=${apiKey}&units=metric`
        axios.get(url).then(handleForecastResponse);
        return(
            null);

        }
} 
                        
            
                        

/*  export default function WeatherForecast(){
     return (
         <div className = "WeatherForecast">
             <div className ="temp-hours row">
             <Hourly/>
             <Hourly/>
             <Hourly/>
             <Hourly/>
            </div>
            <div className ="temp-week-days row">
             <Daily/>
             <Daily/>
             <Daily/>
             <Daily/>
            </div>
         </div>
     );
 } */