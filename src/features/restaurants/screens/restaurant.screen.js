import React from "react";
import { View, SafeAreaView, StyleSheet, StatusBar } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.compent";

import { Searchbar } from "react-native-paper";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar>Search</Searchbar>
    </View>
    <View style={styles.list}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    backgroundColor: "#fff",
  },

  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
