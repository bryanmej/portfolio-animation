import "./ContactPage.scss";
import { useState } from "react";
import TextAnimation from "../TextAnimation/TextAnimation";

const ContactPage = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  return (
    <div className="container contact-page">
      <div className="text-zone">
        <h2>
          <TextAnimation
            strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]}
            idx={15}
            letterClass={letterClass}
          />
        </h2>
      </div>
    </div>
  );
};

export default ContactPage;
