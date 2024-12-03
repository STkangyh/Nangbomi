import React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

export default function bottomBar() {
  return (
    <Box>
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Home" />
        <BottomNavigationAction label="Refri" />
        <BottomNavigationAction label="My page" />
      </BottomNavigation>
    </Box>
  );
}
