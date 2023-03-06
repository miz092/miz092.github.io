import React from "react";
import { BsInstagram, BsGithub, BsLinkedin, BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./SocialComponent.css";
function SocialComponent() {
  return (
    <div className="portfolio__socialComponent">
      {" "}
      <a href="https://github.com/miz092" target="_blank">
        {" "}
        <BsGithub />
      </a>
      <a href="mailto:mihalyfi.zoltan@gmail.com">
        {" "}
        <MdEmail />
      </a>
      <a href="https://www.linkedin.com/in/mi-zo/" target="_blank">
        {" "}
        <BsLinkedin />
      </a>
      <a>
        {" "}
        <BsDiscord />
      </a>
      <a href="https://www.instagram.com/_m_i_z_o_/" target="blank">
        {" "}
        <BsInstagram />
      </a>
    </div>
  );
}

export default SocialComponent;
