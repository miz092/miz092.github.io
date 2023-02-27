import React from "react";
import { BsInstagram, BsGithub, BsLinkedin, BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import "./footer.css";
function Footer() {
  return (
    <div className="portfolio__footer">
      <div className="portfolio__footer_socialMedia">
        <BsGithub />
        <BsInstagram />
        <BsLinkedin />
        <MdEmail />
        <BsDiscord />
      </div>
      <p>&copy; 2023 Mi Zo</p>
    </div>
  );
}

export default Footer;
