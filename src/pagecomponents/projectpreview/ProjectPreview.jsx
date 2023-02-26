import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectPreview.css";
function ProjectPreview({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="portfolio__projectPreview"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="portfolio__projectPreview_bgImg"
      />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectPreview;
