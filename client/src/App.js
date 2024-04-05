import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from "./Home";
import Projects from "./Projects";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="App">

        <div className="hotbar">
          <Link className="Link" to="/">
            <p id="head" className="hSelec">
              SCCPC
            </p>
          </Link>
          <Link className="hSelec Link" to="/projects">
            Projects
          </Link>
        </div>
      
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
