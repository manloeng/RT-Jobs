import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import * as api from "./api";

class BusinessLogin extends React.Component {
  state = {
    email: "business@test.co.uk",
    password: "password"
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
          <TouchableOpacity
            onPress={e => {
              this.handleSubmit(e);
            }}
          >
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigate("BusinessSignup", { name: "BusinessSignup" })
            }
          >
            <Text>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  handleSubmit = e => {
    const { email, password } = this.state;
    console.log(email);
    e.preventDefault();
    api
      .loginBusiness({ email, password })

      .then(({ email, localId }) => {
        if (localId)
          this.props.navigation.navigate("BusinessJobList", { email, localId });
      })
      .catch(e => console.log(e));
  };

  handleTextChange = (e, name) => {
    const { text } = e.nativeEvent;
    this.setState({ [name]: text });
  };
}
export default BusinessLogin;
