import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";


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
                this.props.navigation.navigate("BusinessApplicantList", {
                  job_id: this.props.job_id,
                  name: "BusinessApplicantList"
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
