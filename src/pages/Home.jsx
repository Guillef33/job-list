import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import Job from '../components/Job';
import data from "../data";



const Home = () => {

    const [state, setState] = useState({
        jobs: data,
        filter: '',
        term: '',
        jobFilter: ''
    });

    const FilterWithSearch = (term) => {
        if(state.term.length > 0) {
        setState ({
            ...state,
            term: term,
            filter: true,
        })
        } if (term.length === 0) {
            setState ({
               ...state,
            term: term,
            filter: false, 
            })
        }

    }

    const filterJobs = () => {
        const jobs = data.filter((val) => {
            if (state.term === "") {
              return val;
            } else if (
              (val.position.toLowerCase().includes(state.term.toLowerCase()),
              val.company.toLowerCase().includes(state.term.toLowerCase()))
              /* https://www.freecodecamp.org/espanol/news/cuatro-maneras-diferentes-de-buscar/
              /* Investigar como hacer esto para un array, ej, lenguage */
              /* inlcude */
            ) {
              return val;
            }
          })
          setState ({
              ...state,
              jobsFilter: jobs
          })
    }

    return (
        <>
            <SearchBar FilterWithSearch={FilterWithSearch} />
        {!state.filter && state.jobs.map ((val, key) => {
            return (
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
                )
            })}    
    </>
    )
}


export default Home;