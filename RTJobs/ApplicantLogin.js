import React from "react";
import { Text, View, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

class ApplicantLogin extends React.Component {
  static navigationOptions = {
    title: "RT Jobs"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Sign Up"
          onPress={() => navigate("ApplicantSignUp", { name: "Sign Up" })}
        />
        <Text style={{ fontSize: 20 }}>Applicant Login</Text>
        <TextInput placeholder="Email Address" />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          password={true}
        />
        <View>
          <Button
            title="Login"
            onPress={() =>
              navigate("ApplicantAvailableJobs", {
                name: "ApplicantAvailableJobs"
              })
            }
          />
        </View>
      </View>
    );
  }
}

export default ApplicantLogin;
