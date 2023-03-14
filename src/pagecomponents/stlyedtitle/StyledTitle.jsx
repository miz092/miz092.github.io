import React from "react";
import "./StyledTitle.css";

function StyledTitle() {
  return (
    <div className="portfolio__styledTitle_container">
      <a
        href="https://en.wikipedia.org/wiki/%22Hello,_World!%22_program"
        target="_blank"
      >
        <svg className="portfolio_svg" viewBox="0 0 1320 300">
          <text
            className="portfolio_svg_text"
            x="50%"
            y="50%"
            dy=".35em"
            textAnchor="middle"
          >
            Hello, World!
          </text>
        </svg>
      </a>
    </div>
  );
}

export default StyledTitle;
