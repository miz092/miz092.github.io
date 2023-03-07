import React from "react";
import "./Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRegQuestionCircle, FaAirbnb, FaMapMarkedAlt } from "react-icons/fa";
import { MdSchool, MdWork } from "react-icons/md";
import spaceVideo from "../../assets/space-7984.mp4";
function Experience() {
  return (
    <div className="portfolio__experience">
      <video id="bg-video_exp" autoPlay playsInline loop muted>
        <source src={spaceVideo} type="video/mp4" />
      </video>

      <VerticalTimeline lineColor="#fca311">
        <VerticalTimelineElement
          contentStyle={{
            background: "#001219",
            color: "#fff",
          }}
          id="timeLineFont"
          className="vertical-timeline-element--education"
          date="2012"
          iconStyle={{ background: "#001219", color: "#fff" }}
          icon={<MdSchool></MdSchool>}
        >
          <h3 className="vertical-timeline-element--title">
            Alternatív Közgazdasági Gimnázium
          </h3>
          <h5 className="vertical-timeline-element--description">
            High school diploma
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "#005f73",
            color: "#fff",
            fontSize: 25,
          }}
          className="vertical-timeline-element--education"
          date="2013 - 2015"
          iconStyle={{ background: "#005f73", color: "#fff" }}
          icon={<MdSchool></MdSchool>}
        >
          <h3 className="vertical-timeline-element--title">PPKE</h3>
          <h5>
            I graduated from high school in 2012 and decided to pursue a degree
            in law. I attended university for 1.5 years, but I found that my
            passion lay elsewhere
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "#0a9396",
            color: "#fff",
            fontSize: 25,
          }}
          className="vertical-timeline-element--work"
          date="2015 - 2020"
          iconStyle={{ background: "#0a9396", color: "#fff" }}
          icon={<FaAirbnb></FaAirbnb>}
        >
          <h3 className="vertical-timeline-element--title">AirBnb journey</h3>
          <h5>
            Being an Airbnb host for 5 years was a challenging experience. It
            required a lot of preparation and attention to detail, such as
            setting up the apartment for guests, cleaning and tidying up
            regularly, and coordinating check-ins and check-outs. Additionally,
            there were times when dealing with difficult guests or resolving
            issues was stressful and demanding.
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "#ee9b00",
            color: "#fff",
            fontSize: 25,
          }}
          className="vertical-timeline-element--education"
          date="2015-2018"
          iconStyle={{ background: "#ee9b00", color: "#fff" }}
          icon={<FaMapMarkedAlt></FaMapMarkedAlt>}
        >
          <h3 className="vertical-timeline-element--title">
            Being a tour operator
          </h3>
          <h5>
            After attending law university I worked in the travel industry as an
            inbound tour operator for 3 years. During this time, I gained
            valuable experience in managing complex itineraries and providing
            exceptional customer service to international clients.
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "#ca6702",
            color: "#fff",
            fontSize: 25,
          }}
          className="vertical-timeline-element--education"
          date="2017-2021"
          iconStyle={{ background: "#ca6702", color: "#fff" }}
          icon={<MdWork></MdWork>}
        >
          <h3 className="vertical-timeline-element--title">Back to school?</h3>
          <h5>
            While I enjoyed my time as a tour operator, I knew that I wanted to
            continue learning and growing in my career. I decided to go back to
            university to study communications. During my studies, I was
            introduced to the world of programming and discovered that I had a
            natural aptitude for it. I was fascinated by the endless
            possibilities that coding offered, and I knew that this was the
            field I wanted to pursue.
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "#ae2012",
            color: "#fff",
            fontSize: 25,
          }}
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "#ae2012", color: "#fff" }}
          icon={<MdSchool></MdSchool>}
        >
          <h3 className="vertical-timeline-element--title"></h3>
          <h5>
            In 2022, I decided to take the leap of faith and join Codecool
            programming school. Over the course of 10 months, I learned a
            variety of programming languages and technologies, including Java,
            JavaScript, React, Postgres, Springboot, and MongoDB. It was
            challenging at times, but I was excited to be learning new skills
            and working towards a new career path.
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "#9b2226",
            color: "#fff",
            fontSize: 25,
          }}
          className="vertical-timeline-element--education"
          date="2023 -"
          iconStyle={{ background: "#9b2226", color: "#fff" }}
          icon={<FaRegQuestionCircle></FaRegQuestionCircle>}
        >
          <h3 className="vertical-timeline-element--title">What's next?</h3>
          <h5>Stay tuned... :) </h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
