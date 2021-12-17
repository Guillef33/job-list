import React, { useState } from 'react'
import SearchBar from '../components/SearchBar';
import Job from '../components/Job';
import data from "../data";

const Home = () => {

    const [state, setState] = useState({
        jobs: data,
        filter: false,
        term: '',
        jobFilter: ''
    });

    const FilterWithSearch = (term) => {
      console.log('entro')
        if(term.length > 0) {
                console.log('termino')
        filterJobs(term);
        } if (term.length === 0) {
            setState ({
               ...state,
            filter: false, 
            })
        }

    }

    const filterJobs = (term) => {

        const jobs = data.filter((val) => {
            if (term === "") {
              return val;
            } 
            if 
              (val.position.toLowerCase().includes(term.toLowerCase()) )
               {                 
                return val;
              }
            if (val.company.toLowerCase().includes(term.toLowerCase())) {
              return val;
              }             
            })
          
          setState ({
              ...state,
              jobFilter: jobs,
              filter:true
          })
    }

     const filterWithTags = (languaje) => {

      const jobFilter = data.filter((val) => {
        if (languaje === '') {
          console.log('No existe el lenguaje')
          return val
        } 
        if (val.languages.includes(languaje)) {
            return val;
          }
        })

        setState ({
        ...state,
        jobFilter: jobFilter,
        filter: true
        })
     }
   
    const removeFilters = () => {
          setState ({
          ...state,
          filter:false,
          })
      }
        
    return (
        <>
            <SearchBar FilterWithSearch={FilterWithSearch} removeFilters={removeFilters} filter={state.filter} />
            {!state.filter && state.jobs.map ((val, key) => { // Si no tiene filtro, mostrar todos los Jobs
            return (
                <Job
                filterWithTags={filterWithTags}   
                  key={key}
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
            {state.filter && state.jobFilter.map ((val, key) => { // Si tiene filtro, mostrar todos los Jobs
            // if (val.includes(state.term)) { Aca quise agregar un condicional rendering
            return (
                <Job  filterWithTags={filterWithTags} 
                  key={key}
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
                  languages={val.languages}
                />
                )

            })}   
             
    </>
    )
}


export default Home;