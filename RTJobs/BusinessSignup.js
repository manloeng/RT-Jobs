import React from "react";
import { StyleSheet, Text, Button, View, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import * as api from "./api";
// import console = require("console");

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
    const { navigate } = this.props.navigation;

    console.log(this.state.password);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20 }}>Business Sign Up</Text>
        <View>
          <TextInput
            onChange={this.handleTextChange}
            placeholder="Business Name"
            name="display_name"
          />
          <TextInput
            onChange={this.handleTextChange}
            placeholder="Email Address"
            name="email"
            onSubmit={() => {
              if (this.state.email !== "") {
                ("Email Not Valid");
              } else {
                (".......");
              }
            }}
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
            // onSubmit={this.handleSubmit}
            onChange={this.handleTextChange}
            type="submit"
            value="Submit"
            title="Sign Up"
            onPress={e => {
              console.log("on press");
              this.handleSubmit(e);
            }}
          />
        </View>
      </View>
    );
  }

  handleSubmit = e => {
    console.log("in submit");
    const { display_name, email, password } = this.state;
    e.preventDefault();
    api
      .postBusiness({ display_name, email, password })
      .then(({ display_name, email, localId }) => {
        console.log(display_name, email, localId);
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
