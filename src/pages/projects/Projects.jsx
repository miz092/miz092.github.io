import React from "react";
import ProjectPreview from "../../pagecomponents/projectpreview/ProjectPreview";
import { ProjectList } from "../../data/DataProvider.jsx";
import "./Projects.css";

function Projects() {
  return (
    <div className="portfolio__projects">
      <h2> My Personal Projects</h2>
      <div className="portfolio__projects_projectList">
        {ProjectList.map((project, index) => {
          return (
            <div>
              {" "}
              <ProjectPreview
                id={index}
                name={project.name}
                image={project.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
