import React from "react";
import ResponsiveDrawer from "../navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <ResponsiveDrawer>
      <Outlet />
    </ResponsiveDrawer>
  );
};

export default MainLayout;
