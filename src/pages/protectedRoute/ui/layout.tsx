import React from "react";
import { Outlet } from "react-router-dom";
import BottomBar from "../../../widgets/bottomBar/ui/bottomBar";
import Box from "@mui/material/Box";

export default function Layout() {
  return (
    <Box sx={{ pb: "56px" }}>
      <Box sx={{ height: "100vh", overflow: "auto" }}>
        <Outlet />
      </Box>
      <BottomBar />
    </Box>
  );
}
