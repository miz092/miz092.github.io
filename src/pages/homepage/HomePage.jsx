import React from "react";
import "./HomePage.css";
import SocialComponent from "../../socialcomponent/SocialComponent";
import StyledTitle from "../../pagecomponents/stlyedtitle/StyledTitle";
import spaceVideo from "../../assets/space-7982.mp4";
import {
  SiJavascript,
  SiMongodb,
  SiReact,
  SiTypescript,
  SiPostgresql,
  SiSpringboot,
} from "react-icons/si";
import { RiTeamFill, Ri24HoursFill } from "react-icons/ri";
import { GiMaze } from "react-icons/gi";
import { DiJavascript1 } from "react-icons/di";
import { HiPresentationChartLine, HiLightBulb } from "react-icons/hi";
import { FaJava, FaHtml5, FaCss3Alt, FaNodeJs, FaNpm } from "react-icons/fa";

function HomePage() {
  const guestArray = [
    "future employer.",
    "headhunter.",
    "old classmate.",
    "mom.",
    "stranger.",
  ];

  return (
    <>
      <div className="portfolio__homePage">
        <div id="video-container"></div>
        <div className="portfolio__homePage_about">
          <video id="bg-video" autoPlay playsinline loop muted>
            <source src={spaceVideo} type="video/mp4" />
          </video>

          <div className="portfolio__homePage_about-prompt">
            <div>
              {" "}
              <StyledTitle welcomeTo={guestArray} />
            </div>
            <h4>
              Thank you for visiting my portfolio site. Here, you can explore my
              past projects and learn more about my experience with various
              technologies and past work experiences. I hope you find the
              information helpful in getting to know me better. Thanks again for
              stopping by, and I look forward to hearing from you soon!{" "}
            </h4>
            <SocialComponent />
          </div>
        </div>

        <div className="portfolio__homePage_skills">
          <div className="portfolio__homapage_skills-title">
            <h1> Skills</h1>
          </div>
          <div className="portfolio__homePage_skills-list">
            <div className="portfolio__homePage_skills-list_item">
              {" "}
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
                <SiTypescript />
                TypeScript
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
                Team
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
    </>
  );
}

export default HomePage;
