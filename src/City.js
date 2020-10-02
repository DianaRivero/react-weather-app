import React from "react";

export default function City(props) {
  return (
    <div className="City">
      <div className="row">
        <h2 className="location">{props.location}</h2>
      </div>
    </div>
  );
}
