import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import KitchenIcon from "@mui/icons-material/Kitchen";
import PersonIcon from "@mui/icons-material/Person";

export default function BottomBar() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/refri-list");
        break;
      case 2:
        navigate("/mypage");
        break;
    }
  };

  return (
    <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Refri" icon={<KitchenIcon />} />
        <BottomNavigationAction label="My page" icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
}
