import { StatusBar } from "expo-status-bar";
import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "b66526266bbcabf977854dfab045fcbf";

// View = div, Text = span
export default class extends React.Component {
  state = { isLoading: true };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
    );
    console.log(data);
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync(); // 현재 위치를 찾는 메서드
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {}
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
