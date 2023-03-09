import React from "react";
import { BsInstagram, BsGithub, BsLinkedin, BsDiscord } from "react-icons/bs";
import { MdEmail, MdEMobiledata } from "react-icons/md";
import "./footer.css";

function Footer() {
  return (
    <div className="portfolio__footer">
      <div className="portfolio__footer_socialMedia">
        <BsGithub />
        <BsInstagram />
        <BsLinkedin />
        <MdEmail />
      </div>
    </div>
  );
}

export default Footer;
