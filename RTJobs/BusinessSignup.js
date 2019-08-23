import React from "react";
import { StyleSheet, Text, Button, View, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";

class BusinessSignup extends React.Component {
  static navigationOptions = {
    title: "RT Jobs"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20 }}>Business Sign Up</Text>
        <View>
          <TextInput placeholder="Business Name" />
          <TextInput placeholder="Email Address" />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            password={true}
          />
          <View style={{ margin: 7 }} />
          <Button title="Sign Up" />
        </View>
      </View>
    );
  }
}
export default BusinessSignup;
