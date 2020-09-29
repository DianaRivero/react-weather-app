import React from "react";
import Hourly from "./Hourly";
import Daily from "./Daily";

 export default function Forecast(){
     return (
         <div className = "Forecast">
             <div className ="temp-hours row">
             <Hourly/>
             <Hourly/>
             <Hourly/>
             <Hourly/>
             {/* <Hourly/> */}
            </div>
            <div className ="temp-week-days row">
             <Daily/>
             <Daily/>
             <Daily/>
             <Daily/>
             {/* <Daily/> */}
            </div>
         </div>
     )
 }