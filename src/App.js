import React from "react";
import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
        <Forecast/>
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
  );
}


