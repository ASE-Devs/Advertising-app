import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";
import DashBar from "../components/DashBar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="ml-60 flex flex-col gap-y-4 w-full">
        <DashBar />
      <Outlet />
      </div>
    
    </div>
  );
};

export default DashboardLayout;
