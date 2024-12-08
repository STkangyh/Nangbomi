import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import KitchenIcon from "@mui/icons-material/Kitchen";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Header() {
  return (
    <Box className="flex flex-row justify-between items-center mx-2 my-12">
      <div className="flex flex-row gap-2 items-center">
        <div className="text-xl font-semibold">냉보미</div>
        <KitchenIcon />
      </div>
      <Link to="settings" className="flex items-center text-inherit">
        <SettingsIcon />
      </Link>
    </Box>
  );
}
