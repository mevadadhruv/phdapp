import React from "react";

export function Search() {
  return (
    <div className="search-bar">
      <div className="search-div">
        <form action="#">
          <input type="search" className="search" />
          <input type="submit" value="Search" className="button" />
        </form>
      </div>
    </div>
  );
}
