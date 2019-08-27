import React from "react";
import { Text, View, ScrollView } from "react-native";

class ApplicationCard extends React.Component {
  render() {
    const {
      created_at,
      confirmation,
      created_by,
      description,
      duration,
      date,
      location,
      pay,
      start_time,
      title,
      vacancies
    } = this.props;
    return (
      <ScrollView>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>{created_at} </Text>
          <Text>{title} </Text>
          <Text>{created_by} </Text>
          <Text>Number of Vacancies: {vacancies} </Text>
          <Text>Location: {location} </Text>
          <Text>Pay: {pay} </Text>
          <Text>Start Time: {start_time} </Text>
          <Text>Start Date: {date} </Text>
          <Text>Duration: {duration} </Text>
          <Text>Job Description: {description} </Text>
        </View>
      </ScrollView>
    );
  }
}
export default ApplicationCard;
