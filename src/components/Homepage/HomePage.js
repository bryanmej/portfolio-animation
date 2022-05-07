import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";
import TextAnimation from "../TextAnimation/TextAnimation";

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
    </div>
  );
};

export default HomePage;
