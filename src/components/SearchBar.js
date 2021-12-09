import React, { useState } from "react";
// import jobs from "../jobs.js";
import data from "../data";
import Job from "./Job";

function SearchBar(FilterWithSearch) {
  // const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="top-bar">
        <h1>Nuevo puestos de empleo</h1>
        <div>
          <input
            type="text"
            placeholder="Busca por posicion"
            onChange={(event) => {
              FilterWithSearch(event.target.value);
            }}
          />
          {/* <button type="submit" value="buscar" >Buscar</button> */}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
