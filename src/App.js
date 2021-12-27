import JobList from './components/JobList';
import SearchBar from './components/SearchBar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Three from './pages/Three';
import ModelPage from "./pages/ModelPage";
import React from 'react';



function App() {
  return (
    <React.StrictMode>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<SearchBar />} />
        <Route path="/jobs" element={<JobList />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/three" element={<Three />} />
          <Route path="/model" element={<ModelPage />} />
        </Routes>
      </div>
    </React.StrictMode>
  );
}

export default App;
