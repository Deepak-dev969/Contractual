import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardHeader from "../Dashboard-header/Dashboard-header";
import Sidebar from "../Dashboard-sidebar/Dashboard-sidebar";
import { Box } from "@mui/material";

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false); //
  const location = useLocation();
  const currentPage = location.pathname.split("/").pop() || "Dashboard";

  return (
    <Box sx={{ display: "flex" }}>
      {/* Pass collapsed & setCollapsed */}
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DashboardHeader breadcrumb={currentPage} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
