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

class BusinessJobList extends React.Component {
  static navigationOptions = {
    title: "RT Jobs"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() =>
            navigate("BusinessPostJob", { name: "BusinessPostJob" })
          }
        >
          <Text>Post Job</Text>
        </TouchableOpacity>
        <View>
          <Text style={{ fontSize: 20 }}>List of jobs go here</Text>
        </View>
      </View>
    );
  }
}
export default BusinessJobList;
