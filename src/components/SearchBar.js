import React, { useState } from "react";
// import jobs from "../jobs.js";
import data from "../data";
import Job from './Job';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
        <>
            <div className="top-bar">
                <h1>Nuevo puestos de empleo</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Buscar ..."
                        onChange={(event) => {
                        setSearchTerm(event.target.value);
                        }}
                    />
                    {/* <button type="submit" value="buscar" >Buscar</button> */}
                </div>
            </div>
            <div>
      
      {data
        .filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.position.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, key) => {
          return (
            <>
                <Job
                    logo={val.logo}
                    position={val.position}
                    featured={val.featured}
                    isNew={val.isNew}
                    level={val.level}
                    role={val.role}
                    contract={val.contract}
                    postedAt={val.postedAt}
                    company={val.company}
                    location={val.location}
                    key={val.id}
                    languages={val.languages}
                />  
            </>
          );
        })}
    </div>
    </>
  );
}

export default SearchBar;
