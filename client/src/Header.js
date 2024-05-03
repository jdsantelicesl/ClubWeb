import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Members from "./Members";
import Resources from "./Resources";
import Projects from "./Projects";
import About from "./About";
import Calendar from "./Calendar";
import image from "./scc.svg";
import Hamburger from "./Hamburger";

export default function Header() {
  return (
    <Router>
      <div className="App">
        <div className="hotbar">
          <div className="logo">
            <div className="flex">
              <Link to="https://scc.losrios.edu/">
                <img className="logoImg2" src={image} />
              </Link>
              <div classname="flex" style={{ marginRight: "1vw" }}>
                <Link to="/">
                  <div className="hButton">Home</div>
                </Link>
              </div>
              <div style={{ marginRight: "1vw" }}>
                <Link to="/members">
                  <div className="hButton">Members</div>
                </Link>
              </div>
              <div style={{ marginRight: "1vw" }}>
                <Link to="/resources">
                  <div className="hButton">Resources</div>
                </Link>
              </div>
              <div style={{ marginRight: "1vw" }}>
                <Link to="/projects">
                  <div className="hButton">Projects</div>
                </Link>
              </div>
              <div style={{ marginRight: "1vw" }}>
                <Link to="/calendar">
                  <div className="hButton">Calendar</div>
                </Link>
              </div>
              <div style={{ marginRight: "1vw" }}>
                <Link to="/about">
                  <div className="hButton">About</div>
                </Link>
              </div>
              <div className="hamburger" > 
              <Hamburger />
              </div>
            </div>
          </div>
        </div>
        <hr style={{ marginTop: "-1.5vh" }}></hr>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/members" element={<Members />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}
