import "./SideBar.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import BLogo from "../../assets/images/b_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faUser,
  faHome,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={BLogo} alt="B logo" />
    </Link>
    <nav>
      <NavLink
        exact="true"
        className={(navigationData) =>
          navigationData.isActive ? "active" : null
        }
        to="/"
      >
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        className={(navigationData) =>
          navigationData.isActive ? "active about-link" : "about-link"
        }
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        className={(navigationData) =>
          navigationData.isActive ? "active projects-link" : "projects-link"
        }
        to="/projects"
      >
        <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
      </NavLink>
      <NavLink
        exact="true"
        className={(navigationData) =>
          navigationData.isActive ? "active contact-link" : "contact-link"
        }
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a href="https://github.com/bryanmej">
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/bryanmej/">
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
);

export default SideBar;
