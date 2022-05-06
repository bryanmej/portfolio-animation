import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import TextAnimation from "../TextAnimation/TextAnimation";

const HomePage = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArr = ["B", "r", "y", "a", "n"];
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br />
          I'm{" "}
          <TextAnimation
            letterClass={letterClass}
            strArray={nameArr}
            idx={15}
          />
          <br />
          Front-end Developer
        </h1>
        <h2>Web developer / Blockchain enthusiast</h2>
        <Link to="/contact" className="flat-button">
          Projects
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
