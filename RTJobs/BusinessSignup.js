import React from "react";
import { StyleSheet, Text, Button, View, Image } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import * as api from "./api";

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto"
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    alignItems: "center",
    color: "#F5F5EF",
    margin: 35
  },

  button: {
    alignItems: "center",
    backgroundColor: "#F5F5EF",
    padding: 10,
    borderRadius: 40,
    borderColor: "#303838",
    borderWidth: 1,
    margin: 4
  },
  textarea: {
    backgroundColor: "#F5F5EF",
    borderRadius: 40,
    borderColor: "#303838",
    borderWidth: 1,
    width: 200,
    margin: 5,
    color: "#303838",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center"
  },
  text: {
    color: "#303838",
    fontWeight: "bold",
    fontSize: 20
  }
});

class BusinessSignup extends React.Component {
  state = {
    display_name: "",
    email: "",
    password: ""
  };
  static navigationOptions = {
    title: "Sign Up"
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#047B84"
        }}
      >
        <Image
          style={{ width: 150, height: 150 }}
          source={require("./src/image/logo.png")}
        />
        <Text style={styles.title}>Business Sign Up</Text>
        <View>
          <TextInput
            style={styles.textarea}
            onChange={e => {
              this.handleTextChange(e, "display_name");
            }}
            placeholder="Business Name"
            name="display_name"
          />
          <TextInput
            style={styles.textarea}
            onChange={e => {
              this.handleTextChange(e, "email");
            }}
            placeholder="Email Address"
            name="email"
          />
          <TextInput
            style={styles.textarea}
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
            style={styles.button}
            onChange={this.handleTextChange}
            type="submit"
            value="Submit"
            onPress={e => {
              this.handleSubmit(e);
            }}
          >
            <Text style={styles.text}>Sign Up</Text>
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
        if (localId)
          this.props.navigation.navigate("BusinessLogin", {
            display_name,
            email,
            localId
          });
      })
      .catch(e => console.log(e));
  };

  handleTextChange = (e, name) => {
    const { text } = e.nativeEvent;
    this.setState({ [name]: text });
  };
}
export default BusinessSignup;
