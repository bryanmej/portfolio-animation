import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import TextAnimation from "../TextAnimation/TextAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faNodeJs,
  faJsSquare,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const HomePage = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const greetArr = ["H", "e", "l", "l", "o", "!"];
  const imArr = ["I", "'", "m", " "];
  const nameArr = ["B", "r", "y", "a", "n"];
  const skillArr = [
    "F",
    "r",
    "o",
    "n",
    "t",
    "-",
    "e",
    "n",
    "d",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ];
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <TextAnimation
            letterClass={letterClass}
            strArray={greetArr}
            idx={6}
          />
          <br />
          <TextAnimation letterClass={letterClass} strArray={imArr} idx={9} />
          <TextAnimation
            letterClass={letterClass}
            strArray={nameArr}
            idx={10}
          />
          <br />
          <TextAnimation
            letterClass={letterClass}
            strArray={skillArr}
            idx={17}
          />
        </h1>
        <h2>Web developer / Blockchain enthusiast</h2>
        <Link to="/contact" className="flat-button">
          Projects
        </Link>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="cube-wrap">
            <div className="side side-back">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="side side-top">
              <FontAwesomeIcon icon={faNodeJs} color="green" />
            </div>
            <div className="side side-bottom">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>

            <div className="side side-left">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="side side-right">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="side side-front">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
