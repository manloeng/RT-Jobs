import React from "react";
import { StyleSheet, Text, Button, View, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import * as api from "./api";

class ApplicantSignup extends React.Component {
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
        <Text style={{ fontSize: 20 }}>Applicant Sign Up</Text>
        <View>
          <TextInput
            onChange={e => {
              this.handleTextChange(e, "display_name");
            }}
            placeholder="Applicant Name"
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
          <Button
            onChange={this.handleTextChange}
            type="submit"
            value="Submit"
            title="Sign Up"
            onPress={e => {
              this.handleSubmit(e);
            }}
          />
        </View>
      </View>
    );
  }

  handleSubmit = e => {
    const { display_name, email, password } = this.state;
    e.preventDefault();
    api
      .postApplicant({ display_name, email, password })
      .then(({ display_name, email, localId }) => {
        navigate("ApplicantLogin", { display_name, email, localId });
      })
      .catch(e => console.log(e));
  };

  handleTextChange = (e, name) => {
    const { text } = e.nativeEvent;
    this.setState({ [name]: text });
  };
}
export default ApplicantSignup;
