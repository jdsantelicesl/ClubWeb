import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import Calendar from "./Calendar";

function App() {
  return (
    <Router>
      <div className="App">

        <div className="hotbar">
          <Link to="/">
            <p id="head">
              SCCPC
            </p>
          </Link>
          <Link to="/projects">
            Projects
          </Link>
          <Link to="/calendar">
          <p id="head">
            Calender
            </p>
          </Link>
        </div>
      
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
