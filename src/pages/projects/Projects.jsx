import React from "react";
import ProjectPreview from "../../pagecomponents/projectpreview/ProjectPreview";
import { ProjectList } from "../../data/DataProvider.jsx";
import "./Projects.css";

function Projects() {
  return (
    <div className="portfolio__projects">
      <h1> My Personal Projects</h1>
      <div className="portfolio__projects_projectList">
        {ProjectList.map((project, index) => {
          return (
            <div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
