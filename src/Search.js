import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <div className="row">
        <form>
          <input
            type="text"
            placeholder="Search city..."
            className="search-holder"
            autoComplete="off"
          />
        </form>
        <button className="magnifying-glass">
          <i className="fas fa-search-location" />
        </button>
      </div>
    </div>
  );
}
