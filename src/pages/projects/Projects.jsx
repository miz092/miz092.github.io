import React from "react";
import ProjectPreview from "../../pagecomponents/projectpreview/ProjectPreview";
import { ProjectList } from "../../data/DataProvider.jsx";
import "./Projects.css";
import spaceVideo from "../../assets/space-7983.mp4";

function Projects() {
  return (
    <div className="portfolio__projects">
      <h2> My personal projects</h2>
      <div className="portfolio__projects_projectList">
        <video id="bg-video1" autoPlay playsInline loop muted>
          <source src={spaceVideo} type="video/mp4" />
        </video>
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
