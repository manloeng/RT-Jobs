import React from "react";
import { StyleSheet, Text, Button, View, ScrollView } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as api from "./api";

class BusinessSignup extends React.Component {
  state = {
    display_name: "",
    email: "",
    password: ""
  };
  static navigationOptions = {
    title: "RT Jobs"
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20 }}>Business Sign Up</Text>
        <View>
          <TextInput
            onChange={e => {
              this.handleTextChange(e, "display_name");
            }}
            placeholder="Business Name"
            name="display_name"
          />
          <TextInput
            onChange={e => {
              this.handleTextChange(e, "email");
            }}
            placeholder="Email Address"
            name="email"
          />
          <TextInput
            onChange={e => {
              this.handleTextChange(e, "password");
            }}
            placeholder="Password"
            name="password"
            secureTextEntry={true}
            password={true}
          />
          <View style={{ margin: 7 }} />
          <TouchableOpacity
            onChange={this.handleTextChange}
            type="submit"
            value="Submit"
            onPress={e => {
              this.handleSubmit(e);
            }}
          >
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  handleSubmit = e => {
    const { display_name, email, password } = this.state;
    e.preventDefault();
    api
      .postBusiness({ display_name, email, password })
      .then(({ display_name, email, localId }) => {
        navigate("BusinessLogin", { display_name, email, localId });
      })
      .catch(e => console.log(e));
  };

  handleTextChange = (e, name) => {
    const { text } = e.nativeEvent;
    this.setState({ [name]: text });
  };
}
export default BusinessSignup;
