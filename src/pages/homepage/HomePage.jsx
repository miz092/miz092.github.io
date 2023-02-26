import React from "react";
import "./HomePage.css";
import SocialComponent from "../../socialcomponent/SocialComponent";
import {
  SiJavascript,
  SiMongodb,
  SiReact,
  SiTypescript,
  SiPostgresql,
  SiSpringboot,
} from "react-icons/si";
import { RiTeamFill } from "react-icons/ri";
import { GiMaze } from "react-icons/gi";
import { DiJavascript1 } from "react-icons/di";
import { HiPresentationChartLine, HiLightBulb } from "react-icons/hi";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaNpm,
  FaHandshake,
} from "react-icons/fa";
function HomePage() {
  return (
    <div className="portfolio__homePage">
      <div className="portfolio__homePage_about">
        <h2> Hi, my name is Zoltán.</h2>
        <div className="portfolio__homePage_about-prompt">
          <p>
            A wanna-be software developer with a passion for learning and
            creating.
          </p>
          <SocialComponent></SocialComponent>
        </div>
      </div>
      <div className="portfolio__homePage_skills">
        <h1> Skills</h1>
        <div className="portfolio__homePage_skills-list">
          <div className="portfolio__homePage_skills-list_item">
            <h2> Front-End</h2>
            <div>
              <SiReact />
              ReactJS
            </div>
            <div>
              <FaHtml5 />
              HTML
            </div>
            <div>
              <FaCss3Alt />
              CSS
            </div>
            <div>
              <FaNpm />
              NPM
            </div>
          </div>
          <div className="portfolio__homePage_skills-list_item">
            <h2>Back-End</h2>
            <div>
              <FaNodeJs />
              NodeJS
            </div>

            <div>
              <SiSpringboot />
              Spring
            </div>
            <div>
              <DiJavascript1 />
              ExpressJS
            </div>
            <div>
              <SiMongodb />
              MongoDB
            </div>
            <div>
              <SiPostgresql />
              PostgreSQL
            </div>
          </div>
          <div className="portfolio__homePage_skills-list_item">
            <h2>Languages</h2>
            <div>
              <SiJavascript />
              JavaScript
            </div>
            <div>
              <FaJava />
              Java
            </div>
            <div>
              <SiTypescript /> (TypeScript)
            </div>
          </div>
          <div className="portfolio__homePage_skills-list_item">
            <h2>Soft skills</h2>
            <div>
              <HiPresentationChartLine />
              Presentation
            </div>
            <div>
              <RiTeamFill />
              Teamwork
            </div>
            <div>
              <GiMaze />
              Persistence
            </div>
            <div>
              <HiLightBulb />
              Creativity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
