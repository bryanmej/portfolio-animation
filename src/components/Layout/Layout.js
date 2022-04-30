import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import SideBar from "../Sidebar/SideBar";

const Layout = () => (
  <div className="App">
    <SideBar />
    <div className="page">
      <span className="tags top-tags">&lt;body&gt;</span>
      <Outlet />
      <span className="tags bottom-tags">&lt;/body&gt;</span>
    </div>
  </div>
);

export default Layout;
