import JobList from './components/JobList';
import SearchBar from './components/SearchBar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
