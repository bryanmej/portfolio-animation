import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

const HomePage = () => (
  <div className="container home-page">
    <div className="text-zone">
      <h1>
        Hi, <br />
        I'm Bryan <br />
        Front-end Developer
      </h1>
      <h2>Web developer / Blockchain enthusiast</h2>
      <Link to="/contact" className="flat-button">
        Projects
      </Link>
    </div>
  </div>
);

export default HomePage;
