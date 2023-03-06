import React from "react";
import { ProjectList } from "../../data/DataProvider";
import { BsGithub, Bs0Circle } from "react-icons/bs";
import "./ProjectDisplay.css";
import { useParams } from "react-router-dom";
import spaceVideo from "../../assets/space-7983.mp4";
function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="portfolio__projectDisplay">
      <video id="bg-video" autoPlay playsinline loop muted>
        <source src={spaceVideo} type="video/mp4" />
      </video>
      <h1> {project.name}</h1>
      <img src={project.image} />
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
