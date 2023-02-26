import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="portfolio__navbar">
      <div>
        <button className="portfolio__navbar_toggleButton"></button>
      </div>
      <div className="portfolio__navbar_links">
        <Link to={"/"}>Home</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/experience"}>Experience</Link>
      </div>
    </div>
  );
}

export default Navbar;
