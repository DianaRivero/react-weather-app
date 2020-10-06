import React from "react";
import "./App.css";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header>
          <Search/>
        </header>
        <main>
          <Weather/>
          <Forecast/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
  );
}


