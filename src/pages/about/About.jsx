import React from "react";
import "./About.css";
function About() {
  const personalInfo = {
    personalInformation: {
      firstName: "Zoltán",
      lastName: "Mihályfi",
      birthDate: "1992.09.16",
      placeOfBirth: "Budapest, Hungary",
      address: "1083 Budapest Práter utca 39",
      linkedIn: "https://www.linkedin.com/in/mi-zo/",
      email: "mihalyfi.zoltan@gmail.com",
      hobbies: [
        "Photography",
        "Hiking",
        "Traveling",
        "Gaming",
        "Movies",
        "Sport",
        "Cooking",
      ],
    },
    attributes: {
      effectiveCommunicator: true,
      organizer: true,
      teamOriented: true,
      hardWorker: true,
      creative: true,
      reliable: true,
      openMinded: true,
      outgoing: true,
      dogLover: true,
      adaptive: true,
      multilingual: true,
      problemSolver: true,
      flexible: true,
    },
  };
  const json = JSON.stringify(personalInfo, null, 2);

  return (
    <div className="portfolio__about">
      <pre className="portfolio__about_json">{json}</pre>
    </div>
  );
}

export default About;
