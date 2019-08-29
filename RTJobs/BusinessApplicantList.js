import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import * as api from "./api";

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto"
  },
  title: {
    fontSize: 50,
    color: "#F5F5EF",
    fontWeight: "bold"
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#047B84"
  },
  button: {
    backgroundColor: "#F5F5EF",
    padding: 10,
    borderRadius: 5,
    borderRadius: 40,
    borderColor: "#303838",
    borderWidth: 1,
    margin: 4,
    width: 150,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#303838",
    fontWeight: "bold",
    fontSize: 20
  },
  subContainer: {
    backgroundColor: "#F5F5EF",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "white",
    margin: 10,
    padding: 10
  },
  applcaitionContainer: {
    backgroundColor: "#F5F5EF",
    width: 350,
    borderRadius: 25,
    borderWidth: 1,
    margin: 10,
    padding: 10
  },
  buttonText: {
    color: "#303838",
    fontWeight: "bold",
    fontSize: 15
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

class BusinessApplicantList extends React.Component {
  static navigationOptions = {
    title: "Job Details"
  };
  state = {
    job: {},
    applicants: []
  };

  render() {
    const {
      b_uid,
      created_at,
      created_by,
      date,
      description,
      duration,
      location,
      pay,
      start_time,
      title,
      vacancies
    } = this.state.job;
    const { applicants } = this.state;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <View style={styles.subContainer}>
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
              style={{
                borderWidth: 1,
                margin: 5,
                borderRadius: 10,
                padding: 5
              }}
            >
              <Text style={styles.cardText}>Job Description</Text>
              <Text style={styles.cardText}>{description} </Text>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Text style={styles.cardText}>Location: {location}</Text>
            </View>
          </View>
          <Text style={[styles.title, { marginLeft: 40 }]}>Applications</Text>
          {applicants.map(applicant => {
            console.log(applicant, "here");
            return (
              <View style={styles.applcaitionContainer}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <View
                    style={{
                      alignItems: "center",
                      width: 150,
                      justifyContent: "center"
                    }}
                  >
                    <Text style={styles.text}>{applicant.display_name}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate("Chat", {
                        display_name: applicant.display_name,
                        created_by: applicant.created_by,
                        applications: applicant.applications,
                        messages: applicant.messages,
                        business: true,
                        token: applicant.token
                      });
                    }}
                    style={[styles.button, { backgroundColor: "#af96ca" }]}
                  >
                    <Text style={styles.buttonText}>Contact</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <TouchableOpacity
                    style={[styles.button, { backgroundColor: "#D2F2A6" }]}
                    onPress={() => {
                      api.postBusinessApproval(applicant.applications, "offer");
                    }}
                  >
                    <Text style={styles.buttonText}>Confirm</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.button, { backgroundColor: "#F5A758" }]}
                    onPress={() => {
                      api.postBusinessApproval(
                        applicant.applications,
                        "rejected"
                      );
                    }}
                  >
                    <Text style={styles.buttonText}>Reject</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
  componentDidMount() {
    const { job_id } = this.props.navigation.state.params;
    api.getJobByJobId(job_id).then(job => {
      this.setState({ job });
    });
    api.getApplicantsByJobId(job_id).then(applicants => {
      this.setState({ applicants });
    });
  }
}
export default BusinessApplicantList;
