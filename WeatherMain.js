import React, { Component } from "react";
import { View, Text } from "react-native";
import Routes from "./Component/Routes";

export default class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Routes />;
  }
}
