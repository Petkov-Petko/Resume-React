import React, { useState } from "react";
import "./Projects.css";
import { projects } from "../../assets/assets";

const Projects = () => {
  const [numProjectsToShow, setNumProjectsToShow] = useState(6);

  const handleSeeMore = () => {
    setNumProjectsToShow(numProjectsToShow + 6);
  };

  return (
    <div className="projects" id="projects">
      <h1>Projects:</h1>
      <div className="allProjects">
        {projects.slice(0, numProjectsToShow).map((project, index) => {
          return (
            <div
              key={index}
              className="project"
              data-title={project.description}
            >
              <a href={project.url} target="_blank"><img src={project.img} alt="Project Image"></img></a>
              <div>
                <a href={project.url} target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-link fa-lg"></i>
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github fa-lg"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      {numProjectsToShow < projects.length && (
        <button className="btn" onClick={handleSeeMore}>
          Show more
        </button>
      )}
    </div>
  );
};

export default Projects;
