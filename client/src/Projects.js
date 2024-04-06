import React from 'react';

const Projects = () => {
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="project-card">
        <h2>Project 1</h2>
        <p>This is the Programming Club Website GitHub</p>
        <a href="https://github.com/jdsantelicesl/ClubWeb" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
      <div className="project-card">
        <h2>Project 2</h2>
        <p>This is Juan's RC Car Project using Arduino.</p>
        <a href="https://github.com/jdsantelicesl/Arduino-RC-Car" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  );
};
export default Projects;