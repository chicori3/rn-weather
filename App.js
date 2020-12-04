import { StatusBar } from "expo-status-bar";
import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";

// View = div, Text = span
export default class extends React.Component {
  getLocation = async () => {
    const location = await Location.getCurrentPositionAsync();
  };
  componentDidMount() {}
  render() {
    return <Loading />;
  }
}
