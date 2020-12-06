import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Weather({ temp }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons name="weather-lightning-rainy" size={96} />
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isReuqired,
  condition: PropTypes.oneOf([
    "ThunderStorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
