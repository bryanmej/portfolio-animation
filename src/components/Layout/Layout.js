import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import SideBar from "../Sidebar/SideBar";

const Layout = () => (
  <div className="App">
    <SideBar />
    <div className="page">
      <span className="tags top-tags">
        &lt;html&gt;
        <br />
        <span className="body-tag">&lt;body&gt;</span>
      </span>

      <Outlet />
      <span className="tags bottom-tags body-tag">
        &lt;/body&gt;
        <br />
        <span className="bottom-html-tag">&lt;/html&gt;</span>
      </span>
    </div>
  </div>
);

export default Layout;
