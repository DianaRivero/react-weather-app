import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="Munich" />
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
  );
}


