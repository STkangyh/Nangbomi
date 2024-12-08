import Box from "@mui/material/Box";
import Header from "../../../features/home/ui/header";
import ExpiredFoodList from "../../../features/home/ui/expiredFoodList";
import NavigationButton from "../../../features/home/ui/navigateButton";

export default function Home() {
  return (
    <Box sx={{ height: "100%", overflow: "auto" }}>
      <Header />
      <ExpiredFoodList />
      <NavigationButton />
    </Box>
  );
}
