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
    fontSize: 35,
    fontWeight: "bold",
    alignItems: "center",
    color: "#4c4f4f"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#047B84",
    padding: 10,
    borderRadius: 40,
    borderColor: "#303838",
    borderWidth: 1,
    margin: 4
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },

  cardText: {
    fontSize: 15,
    color: "#303838",
    alignSelf: "center",
    padding: 2
  },
  jobTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#303838",
    alignSelf: "center",
    padding: 2
  },
  detailText: {
    fontSize: 15,
    color: "#303838",
    padding: 2
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
          style={{
            flex: 1,
            justifyContent: "center",
            borderWidth: 1,
            margin: 5,
            borderRadius: 10,
            backgroundColor: "#F5F5EF"
          }}
        >
          <Text style={styles.jobTitleText}>{title} </Text>
          <Text style={styles.cardText}>{created_by}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <View>
              <Text style={styles.detailText}>Start Date: {date} </Text>
              <Text style={styles.detailText}>Start Time: {start_time} </Text>
            </View>
            <View>
              <Text style={styles.detailText}>Pay: {pay} </Text>
              <Text style={styles.detailText}>Duration: {duration} </Text>
            </View>
          </View>
          <View
            style={{ borderWidth: 1, margin: 5, borderRadius: 10, padding: 5 }}
          >
            <Text style={styles.cardText}>Job Description</Text>
            <Text style={styles.cardText}>{description} </Text>
          </View>
          <View>
            <Text style={styles.cardText}>Location: {location}</Text>

            {applicants.includes(u_uid) && (
              <TouchableOpacity
                style={styles.button}
                disabled={true}
                onPress={(e, navigate) => {
                  this.handlePress(e, navigate);
                }}
              >
                <Text style={styles.text}>Application Sent</Text>
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
