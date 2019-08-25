import React from "react";
import { StyleSheet, Text, Button, View, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";

class BusinessJobList extends React.Component {
  static navigationOptions = {
    title: "RT Jobs"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20 }}>List of jobs go here</Text>
      </View>
    );
  }
}
export default BusinessJobList;
