import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.scss";
import SideBar from "../Sidebar/SideBar";

const Layout = () => (
  <div className="App">
    <SideBar />
    <div className="page">
      <Outlet />
    </div>
  </div>
);

export default Layout;
