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

class BusinessApplicantList extends React.Component {
  render() {
    return (
      <View>
        <Text>Job Details</Text>
        <Text>Applications</Text>
      </View>
    );
  }
}
export default BusinessApplicantList;
