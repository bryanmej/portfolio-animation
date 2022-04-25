import "./SideBar.scss";
import React from "react";
import { Link } from "react-router-dom";
import BLogo from "../../assets/images/b_logo.png";

const SideBar = () => (
  <div className="nav-bar">
    <Link to="/">
      <img src={BLogo} alt="B logo" />
    </Link>
  </div>
);

export default SideBar;
