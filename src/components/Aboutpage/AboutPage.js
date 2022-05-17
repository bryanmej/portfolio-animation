import { useState } from "react";
import TextAnimation from "../TextAnimation/TextAnimation";
import "./AboutPage.scss";

const AboutPage = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h2>
          <TextAnimation
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            idx={15}
          />
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          distinctio, ipsa nisi assumenda consequatur cumque quisquam ad fugit
          dolorum numquam! Dignissimos dicta cum praesentium! Dolorum eos
          adipisci autem quisquam molestias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          officiis voluptatem. Temporibus dolor minima quos? Quam totam
          voluptatum at fugiat, voluptate fuga modi ut quibusdam pariatur vero
          et atque placeat!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          repellat delectus ex eveniet culpa quae dolores debitis facilis
          quaerat provident officiis reiciendis, veritatis, nam molestiae.
          Provident commodi optio nihil rerum.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
