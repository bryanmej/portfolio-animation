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
        <div className="contact-form">
          <ul>
            <li className="half">
              <input type="text" name="name" placeholder="Name" required />
            </li>
            <li className="half">
              <input type="email" name="email" placeholder="Email" required />
            </li>
            <li>
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
            </li>
            <li>
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </li>
            <li>
              <input type="submit" className="flat-button" value="Submit" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
