import { useState } from "react";
import "./Projects.css";
import { projects, buildAgo } from "../../assets/assets";

const Projects = () => {
  const [numProjectsToShow, setNumProjectsToShow] = useState(6);

  const handleSeeMore = () => {
    setNumProjectsToShow(numProjectsToShow + 6);
  };

  return (
    <div className="projects reveal" id="projects">
      <h1>Projects:</h1>
      <div className="allProjects">
        {projects.slice(0, numProjectsToShow).map((project, index) => {
          return (
            <div key={index} className="project">
              <img src={project.img} alt={project.title}></img>
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.date && (
                  <span className="project-date">
                    <i className="fa-solid fa-clock"></i>
                    {buildAgo(project.date)}
                  </span>
                )}
                <div className="project-links">
                  <a href={project.url} target="_blank" rel="noreferrer">
                    <i className="fa-solid fa-link fa-lg"></i>
                  </a>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <i className="fa-brands fa-github fa-lg"></i>
                    </a>
                  )}
                </div>
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
