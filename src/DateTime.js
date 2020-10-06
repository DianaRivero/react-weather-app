import React from "react";

export default function DateTime(props) {
 
    let days = ["Sun","Mon","Wed","Thur","Fri","Sat"];
    let months = ["Jan","Feb","March","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let today = props.date.getDate();
    let day = days[props.date.getDay()];
    let month = months[props.date.getMonth()];
    let year = props.date.getFullYear();
    let hour = props.date.getHours();
    if(hour < 10){
      hour = `0${hour}`
    };
    let minutes = props.date.getMinutes();
    if(minutes < 10){
      minutes = `0${minutes}`
    };
    function dateOrdinal() {
    if (today === 1 || today === 21 || today === 31) {
      return today + `st`;
    } else if (today === 2 || today === 22) {
      return today + `nd`;
    } else if (today === 3 || today=== 23) {
      return today + `rd`;
    } else {
      return today + `th`;
    }
  }
  let currentDateTime = `${day}, ${dateOrdinal(today)} ${month}, ${year} ${hour}:${minutes}`
    return (
    <div>
      <p>{currentDateTime}</p>
    </div>
  );
}
