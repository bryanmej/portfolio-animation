import "./SideBar.scss";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import BLogo from "../../assets/images/b_logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faHome } from "@fortawesome/free-solid-svg-icons";

const SideBar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={BLogo} alt="B logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
  </div>
);

export default SideBar;
