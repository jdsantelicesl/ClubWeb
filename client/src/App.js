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
          <div className="logo">
            <div className="flex">
              <Link to="https://scc.losrios.edu/">                
                  <img className="logoImg" src="/scc-logo.svg"></img>
              </Link>
              <Link to="/">
                <div className="hButton">
                  Programming Club
                </div>
              </Link>
            </div>
          </div>
          <div className="flex">
            <div style={{marginRight: "3.5vw"}}>
              <Link to="/projects">
                <div className="hButton">
                  Projects
                </div>
              </Link>
            </div>
            <div style={{ marginRight: "3.5vw" }}>
              <Link to="/calendar">
                <div className="hButton">
                  Calendar
                </div>
              </Link>
            </div>
          </div>        
        </div>
        <hr style={{marginTop: "-1.5vh"}}></hr>
      
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
