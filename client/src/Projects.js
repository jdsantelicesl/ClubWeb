import React from 'react';

const Projects = () => {
  return (
    <div className="Projects">
      <h1>Projects</h1>
      <div className="project-card">
        <h2>Project 1</h2>
        <p>This is a description of Project 1.</p>
        <a href="https://github.com/username/project1" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
      <div className="project-card">
        <h2>Project 2</h2>
        <p>This is a description of Project 2.</p>
        <a href="https://github.com/username/project2" target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;