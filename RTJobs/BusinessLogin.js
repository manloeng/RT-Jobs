import React from "react";
import { StyleSheet, Text, Button, View, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import * as api from "./api";

class BusinessLogin extends React.Component {
  state = {
    email: "",
    password: ""
  };

  static navigationOptions = {
    title: "RT Jobs"
  };

  render() {
   
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20 }}>Business Login</Text>
        <View>
          <TextInput
            onChange={e => {
              this.handleTextChange(e, "email");
            }}
            placeholder="Email Address"
          />
          <TextInput
            onChange={e => {
              this.handleTextChange(e, "password");
            }}
            placeholder="Password"
            secureTextEntry={true}
            password={true}
          />
          <View style={{ margin: 7 }} />
          <Button
            onPress={e => {
              this.handleSubmit(e);
            }}
            title="Login"
          />
          <Button
            onPress={() =>
              navigate("BusinessSignup", { name: "BusinessSignup" })
            }
            title="Sign Up"
          />
        </View>
      </View>
    );
  }
  handleSubmit = e => {
    const { email, password } = this.state;
    e.preventDefault();
    api
      .loginBusiness({ email, password })
      .then(({ email, localId }) => {
        navigate("BusinessLogin", { email, localId });
      })
      .catch(e => console.log(e));
  };

  handleTextChange = (e, name) => {
    const { text } = e.nativeEvent;
    this.setState({ [name]: text });
  };
}
export default BusinessLogin;
