import React, { useState } from 'react';
import Job from './Job';
import SearchBar from './SearchBar';

import data from "../data";
function JobList () {

      const [job, setJob] = useState({
        addJob: "",
        jobs: {data}
      });

    function handleChange(e) {
        setJob({ ...job, addJob: e.target.value });
    }

    function handleSubmit(e) {
    e.preventDefault();

    if (job.jobs.length >= 0) {
      if (job.addJob === "") {
        alert("Debes agregar un titulo");
      } else {
        let newJob = job.jobs;
        newJob[newJob.length] = {
          id: job.jobs.length + 1,
          title: job.addJob,
        };
        setJob({
          ...job,
          jobs: newJob,
          addJob: "",
          inicialState: true,
        });
      };
    }
    }
    
    return (
      <>
        <div className="top-bar">
          <h1>Nuevo puestos de empleo</h1>
          <h2>Componente Job List</h2>
          <div>
            <input type="text" placeholder="Esto no funciona..." />
            <button type="submit" value="buscar">
              Buscar
            </button>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Agrega trabajo..."
                value={job.addJob}
                onChange={handleChange}
              />
              <input type="submit" value="Agregar" />
            </form>
          </div>
        </div>
        <div className="job-wrapper">
          {data.map((job) => (
            <Job
              logo={job.logo}
              position={job.position}
              featured={job.featured}
              level={job.level}
              role={job.role}
              contract={job.contract}
              postedAt={job.postedAt}
              company={job.company}
              location={job.location}
              key={job.id}
              languages={job.languages}
            />
          ))}
        </div>
      </>
    );

}

export default JobList;