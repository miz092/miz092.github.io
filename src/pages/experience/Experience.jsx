import React from "react";
import "./Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { color } from "@mui/system";
import { MdSchool } from "react-icons/md";

function Experience() {
  return (
    <div className="portfolio__experience">
      <VerticalTimeline lineColor="#006d77">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012"
          iconStyle={{ background: "#006d77", color: "#fff" }}
          icon={<MdSchool></MdSchool>}
        >
          <h3 className="vertical-timeline-element--title">My highschool</h3>
          <p>High school diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012"
          iconStyle={{ background: "#006d77", color: "#fff" }}
          icon={<MdSchool></MdSchool>}
        >
          <h3 className="vertical-timeline-element--title">My highschool</h3>
          <p>High school diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012"
          iconStyle={{ background: "#006d77", color: "#fff" }}
          icon={<MdSchool></MdSchool>}
        >
          <h3 className="vertical-timeline-element--title">My highschool</h3>
          <p>High school diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
