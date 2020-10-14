import React, {useState} from "react";

export default function WeatherTemperature(props){
    const [unit,setUnit] = useState("celsius");
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit")
    }
    function showCelsius(event){
    event.preventDefault();
    setUnit("celsius")
    }
    function fahrenheit(){
        return (props.celsius * 9) / 5 + 32;
    }
    if (unit === "celsius"){
        return(   
            <div className="WeatherTemperature">
                <h1>
                    <span>{props.celsius}</span>
                    <span>
                        <button className="btnCelsius btnBlack"> 
                            °C|
                        </button>
                        <button className="btnFahrenheit btnBlue" onClick={showFahrenheit}>
                            °F
                        </button>
                    </span>
                </h1>
            </div>
        );
    }else{
        return(   
            <div className="WeatherTemperature">
                <h1>
                    <span>{Math.round(fahrenheit())}</span>
                    <span>
                        <button className="btnCelsius btnBlue" onClick={showCelsius}> 
                            °C|
                        </button>
                        <button className="btnFahrenheit btnBlack">
                            °F
                        </button>
                    </span>
                </h1>
            </div>
        );

    }
}