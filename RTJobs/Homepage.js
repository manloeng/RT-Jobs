import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    alignItems: "center"
  }
});

class Homepage extends React.Component {
  static navigationOptions = {
    title: "RT Jobs"
  };
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View>
        <Text style={styles.title}>RT Jobs</Text>
        <Text>I am a:</Text>
        <View style={{ width: 100, height: 35, alignContent: "flex-end" }}>
          <Button
            title="Business"
            onPress={() => {
              console.log("clicked");
            }}
          />
        </View>
        <View style={{ width: 100, height: 35, alignContent: "flex-end" }}>
          <Button
            title="Applicant"
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
