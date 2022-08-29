import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./containers/Sidebar";

export const PageLayout = () => {
  return (
    <div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
