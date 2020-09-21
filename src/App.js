import React from "react";
import "./App.css";
import Search from "./Search";
import DateTime from "./DateTime";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header>
          <Search />
          <DateTime />
        </header>
        <main>
          <Weather />
        </main>
      </div>
    </div>
  );
}


