import React, { Component } from "react";
import { View } from "react-native";
import Homepage from "./Homepage";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Homepage />
      </View>
    );
  }
}
