import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ReorderTwoTone } from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="portfolio__navbar" id={expandNavbar ? "open" : "close"}>
      <div className="portfolio__navbar_toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderTwoTone />
        </button>
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
