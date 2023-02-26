import React from "react";
import { BsInstagram, BsGithub, BsLinkedin, BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./SocialComponent.css";
function SocialComponent() {
  return (
    <div className="portfolio__socialComponent">
      {" "}
      <BsGithub />
      <MdEmail />
      <BsLinkedin />
      <BsDiscord />
      <BsInstagram />
    </div>
  );
}

export default SocialComponent;
