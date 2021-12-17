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

     const filterWithTag = (e) => {

     const htmlJobs = data.map((job) => job.language.filter(val => {
      if (val.languages.include('html'))  {
        console.log('html')
        return val;

        }
      if (val.languages.include('js')) {
        console.log('js')
         return val;
      }
      if (e.languages.include('python')) {
           console.log('python')
         return val;
      }
      }
     ))
      setState ({
      ...state,
      JobFilter: htmlJobs,
      filter: true
      })
    }

    const removeFilters = () => {
          setState ({
          ...state,
          filter:false,
          })
      }
        
      //setear el filtrado en true
      // hacer un map de la data respecto al filtrado
      // guardar los datos filtrados en jobFilter
      // Y despues agregar un boton al lado del buscador para poder limpiar el filtrado
      // Ese boton se podria mostrar si hay filtros
      // El boton setea el filtrado en falso
      // El boton que sea simplemente un boton que se renderiza o no si el filtro esta en true
      // Tambien podria condicionar la clase del boton, si tiene filtrado que se muestre con colores y si no tiene filtrado que se muestre en gris
        

    return (
        <>
            <SearchBar FilterWithSearch={FilterWithSearch} removeFilters={removeFilters} filter={state.filter} />
            {!state.filter && state.jobs.map ((val, key) => { // Si no tiene filtro, mostrar todos los Jobs
            return (
                <Job
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
                <Job  filterWithTag={filterWithTag} 
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