import JobList from './components/JobList';
import SearchBar from './components/SearchBar';
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/jobs" element={<JobList />} />
      </Routes>
    </div>
  );
}

export default App;
