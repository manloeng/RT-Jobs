import React from "react";
import { Button } from "react-native";
class Homepage extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    // const { navigate } = this.props.navigation;
    return <Button title="Anna" />;
  }
}
export default Homepage;
