import { StatusBar as ExpoStatusBaR } from "expo-status-bar";
import React from "react";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurant.screen";

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBaR style="auto" />
    </>
  );
}
