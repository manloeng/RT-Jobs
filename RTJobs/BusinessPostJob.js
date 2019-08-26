import React from "react";
import { StyleSheet, Text, Button, View, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";

class BusinessPostJob extends React.Component {
  static navigationOptions = {
    title: "RT Jobs"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20 }}>Post info goes here</Text>
      </View>
    );
  }
}
export default BusinessPostJob;
