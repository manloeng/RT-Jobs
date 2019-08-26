import React from "react";
import { Text, Button, View, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
class ApplicantAvailableJobs extends React.Component {
  static navigationOptions = {
    title: "RT Jobs"
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() =>
            navigate("ApplicantJobsApplied", {
              name: "ApplicantJobsApplied"
            })
          }
        >
          <Text>Your Jobs</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>
          List of jobs an applicant can apply for goes here
        </Text>
      </View>
    );
  }
}
export default ApplicantAvailableJobs;
