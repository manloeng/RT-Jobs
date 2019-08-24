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
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text style={styles.title}>RT Jobs</Text>
        <Text>I am a:</Text>
        <View style={{ width: 100, height: 35, alignContent: "flex-end" }}>
          <Button
            title="Business"
            onPress={() => navigate("BusinessLogin", { name: "Business" })}
          />
        </View>
        <View style={{ width: 100, height: 35, alignContent: "flex-end" }}>
          <Button
            title="Applicant"
            onPress={() => navigate("ApplicantLogin", { name: "Applicant" })}
          />
        </View>
        <View style={{ width: 100, height: 35, alignContent: "flex-end" }}>
          <Button
            title="Test"
            onPress={() => navigate("VideoCallTest", { name: "Test" })}
          />
        </View>
      </View>
    );
  }
}

export default Homepage;
