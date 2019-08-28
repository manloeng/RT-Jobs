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
    borderRadius: 5,
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
    fontSize: 15
  },
  text: {
    color: "#303838",
    fontWeight: "bold",
    fontSize: 20
  }
});

class ApplicantLogin extends React.Component {
  state = {
    email: "applicant@test.co.uk",
    password: "password"
  };

  static navigationOptions = {
    title: "Login"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#047B84"
        }}
      >
        <Text style={styles.title}>Applicant Login</Text>

        <View>
          <TextInput
            style={styles.textarea}
            onChange={e => {
              this.handleTextChange(e, "email");
            }}
            placeholder="Email Address"
          />
          <TextInput
            style={styles.textarea}
            onChange={e => {
              this.handleTextChange(e, "password");
            }}
            placeholder="Password"
            secureTextEntry={true}
            password={true}
          />
          <View style={{ margin: 7 }} />
          <TouchableOpacity
            style={styles.button}
            onPress={(e, navigate) => {
              this.handleSubmit(e, navigate);
            }}
          >
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate("ApplicantSignUp", { name: "ApplicantSignUp" })
            }
          >
            <Text style={styles.text}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  handleSubmit = e => {
    const { email, password } = this.state;
    e.preventDefault();
    api
      .loginApplicant({ email, password })
      .then(({ display_name, email, localId }) => {
        if (localId)
          this.props.navigation.navigate("ApplicantAvailableJobs", {
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
export default ApplicantLogin;
