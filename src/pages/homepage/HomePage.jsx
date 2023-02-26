import React from "react";
import "./HomePage.css";
import { BsGithub, BsLinkedin, BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import {
  SiJavascript,
  SiMongodb,
  SiReact,
  SiPostgresql,
  SiSpringboot,
} from "react-icons/si";
import { FaJava, FaHtml5, FaCss3Alt, FaNodeJs, FaNpm } from "react-icons/fa";
function HomePage() {
  return (
    <div className="portfolio__homePage">
      <div className="portfolio__homePage_about">
        <h2> Hi, my name is Zoltán</h2>
        <div className="portfolio__homePage_about-prompt">
          <p>
            A wanna-be software developer with a passion for learning and
            creating.
          </p>
          <BsGithub />
          <MdEmail />
          <BsLinkedin />
          <BsDiscord />
        </div>
      </div>
      <div className="portfolio__homePage_skills">
        <h1> Skills</h1>
        <ol className="portfolio__homePage_skills-list">
          <div className="item">
            <h2> Front-End</h2>
            <span>ReactJS, HTML, CSS, NPM</span>
          </div>
          <div className="item">
            <h2>Back-End</h2>
            <span>NodeJS, Java Spring, ExpressJS, MongoDB</span>
          </div>
          <div className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, (TypeScript)</span>
          </div>
        </ol>
      </div>
    </div>
  );
}

export default HomePage;
