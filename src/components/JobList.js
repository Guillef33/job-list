import React from 'react';
import Job from './Job';
import SearchBar from './SearchBar';

import data from "../data";
function JobList () {
    
    return (
        <>
            <div className="top-bar">
                <h1>Nuevo puestos de empleo</h1>
                <div>
                    <input type="text" />
                    <button type="submit" value="buscar" >Buscar</button>
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