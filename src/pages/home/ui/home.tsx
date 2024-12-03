import React from "react";
import Header from "../../../features/home/ui/header";
import ExpiredFoodList from "../../../features/home/ui/expiredfoodlist";
import NavigationButton from "../../../features/home/ui/navigateButton";

export default function Home() {
  return (
    <div>
      <Header />
      <ExpiredFoodList />
      <NavigationButton />
    </div>
  );
}
