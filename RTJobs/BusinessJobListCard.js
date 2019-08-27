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

class BusinessJobListCard extends React.Component {
  render() {
    const {
      title,
      created_by,
      vacancies,
      location,
      pay,
      start_time,
      duration,
      description
    } = this.props;
    return (
      <ScrollView>
        <View>
          <View>
            <Text>{title} </Text>
            <Text>{created_by} </Text>
            <Text>Number of Vacancies: {vacancies} </Text>
            <Text>Location: {location} </Text>
            <Text>Pay: {pay} </Text>
            <Text>Start Time: {start_time} </Text>
            <Text>Duration: {duration} </Text>
            <Text>Job Description: {description} </Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation("BusinessJobApplicants", {
                  name: "BusinessJobApplicants"
                })
              }
            >
              <Text>Applicants</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default BusinessJobListCard;
