import React from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import * as api from "./api";

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto"
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    alignItems: "center",
    color: "#4c4f4f"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#006767",
    padding: 10,
    borderRadius: 5
  },
  text: {
    color: "white"
  }
});

class JobCard extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const {
      created_at,
      created_by,
      description,
      duration,
      date,
      location,
      applicants,
      u_uid,
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

          {applicants.includes(u_uid) && (
            <TouchableOpacity
              style={styles.button}
              disabled={true}
              onPress={(e, navigate) => {
                this.handlePress(e, navigate);
              }}
            >
              <Text style={styles.text}>Applied</Text>
            </TouchableOpacity>
          )}

          {!applicants.includes(u_uid) && (
            <TouchableOpacity
              style={styles.button}
              onPress={(e, navigate) => {
                this.handlePress(e, navigate);
              }}
            >
              <Text style={styles.text}>Apply</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    );
  }

  handlePress = (e, navigate) => {
    const {
      b_uid,
      u_uid,
      job_id,
      created_by,
      description,
      duration,
      display_name,
      date,
      location,
      pay,
      start_time,
      title,
      vacancies
    } = this.props;
    e.preventDefault();
    this.props.updateJobs(u_uid, job_id);
    api
      .postApplication({
        b_uid,
        u_uid,
        job_id,
        created_by,
        description,
        duration,
        display_name,
        date,
        location,
        pay,
        start_time,
        title,
        vacancies
      })
      .then(({ u_uid, job_id }) => {
        if (u_uid) console.log(u_uid, "u_uid");
      })
      .catch(e => console.log(e));
  };
}
export default JobCard;
