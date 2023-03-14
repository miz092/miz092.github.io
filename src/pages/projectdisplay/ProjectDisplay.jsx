import React from "react";
import { ProjectList } from "../../data/DataProvider";
import { BsGithub } from "react-icons/bs";
import "./ProjectDisplay.css";
import { useParams } from "react-router-dom";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="portfolio__projectDisplay">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <div className="portfolio__projectDisplay_description">
        {project?.link ? (
          <a
            className="portfolio__projectDisplay_description_link"
            href={project.link}
            target="_blank"
          >
            Link to page
          </a>
        ) : (
          ""
        )}{" "}
        <p>TL;DR:</p>
        <p> {project.description}</p>
      </div>

      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.url} target="_blank">
        {" "}
        <BsGithub />
      </a>
    </div>
  );
}
export default ProjectDisplay;
