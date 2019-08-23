import React from "react";
import { Text, View } from "react-native";

class ApplicantSignUp extends React.Component {
  static navigationOptions = {
    title: "RT Jobs"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Applicant SignUp</Text>
      </View>
    );
  }
}

export default ApplicantSignUp;
