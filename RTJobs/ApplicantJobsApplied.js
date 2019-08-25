import React from "react";
import { StyleSheet, Text, Button, View, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";

class ApplicantAvailableJobs extends React.Component {
  static navigationOptions = {
    title: "RT Jobs"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20 }}>
          List of jobs an applicant has applied for goes here{" "}
        </Text>
      </View>
    );
  }
}
export default ApplicantAvailableJobs;
