import React from "react";

export default function Hourly(){
    return (
    <div className = "Hourly">
        {/* <div className ="temp-hours"> */}
            <div className="col">
                <div className="row">
                    <div className="col">9:00</div>
                </div> 
                <div className="row">
                    <div className="col">
                        <img src="img/01d.png" className = "icons-hourly-forecast" alt="Sunny"></img>
                    </div> 
                </div>   
                <div className="row">
                    <div className="col deg-hour"> <strong>16°/20°</strong></div>
                </div>  
            </div>  
        {/* </div> */}
    </div>
    )
}