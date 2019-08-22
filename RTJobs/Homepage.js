import React from "react";
import { Text, Button, View } from "react-native";

class Homepage extends React.Component {
  static navigationOptions = {
    title: "Welcome"
  };
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>RT Jobs</Text>
        <View>
          <Button
            title="Yes"
            onPress={() => {
              console.log("clicked");
            }}
          />
        </View>
        <View>
          <Button
            title="No"
            onPress={() => {
              console.log("clicked");
            }}
          />
        </View>
      </View>
    );
  }
}
export default Homepage;
