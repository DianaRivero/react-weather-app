import React from "react";

export default function Daily(){
    return (
    <div className = "Daily">
            <div className="col">
                <div className="row">
                    <div className="col">Mon</div>
                </div> 
                <div className="row">
                    <div className="col">
                        <img src="img/01d.png" className = "icons-daily-forecast" alt="Sunny"></img>
                    </div> 
                </div>   
                <div className="row">
                    <div className="col deg-days">16°</div>
                </div>  
            </div>  
    </div>
    )
}