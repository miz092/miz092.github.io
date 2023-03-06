import React from "react";
import { ProjectList } from "../../data/DataProvider";
import { BsGithub, Bs0Circle } from "react-icons/bs";
import "./ProjectDisplay.css";
import { useParams } from "react-router-dom";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="portfolio__projectDisplay">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <BsGithub />
    </div>
  );
}
export default ProjectDisplay;
