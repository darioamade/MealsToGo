import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurante",
    icon,
    photos = [
      "https://www.pizzaexpress.com/-/media/2021-Images/April/CC-Homepage-module.ashx",
    ],
    address = " 100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporaly,
  } = restaurant;
  return (
    <Card elevation={5} style={StyleSheet.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
  title: {
    padding: 10,
  },
});
