import React from "react";
import { Text, View } from "react-native";

class JobCard extends React.Component {
  render() {
    const {
      created_at,
      created_by,
      description,
      duration,
      job_id,
      location,
      pay,
      start_time,
      title,
      vacancies
    } = this.props;
    return (
      <View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text>{job_id} </Text>
          <Text>{created_at} </Text>
          <Text>{title} </Text>
          <Text>{created_by} </Text>
          <Text>Number of Vacancies: {vacancies} </Text>
          <Text>Location: {location} </Text>
          <Text>Pay: {pay} </Text>
          <Text>Start Time: {start_time} </Text>
          <Text>Duration: {duration} </Text>
          <Text>Job Description: {description} </Text>
        </View>
      </View>
    );
  }
}
export default JobCard;
