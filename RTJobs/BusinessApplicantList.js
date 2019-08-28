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
    color: '#F5F5EF',
    fontWeight: "bold",
  },
    container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#047884'
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
    justifyContent: "center",
  },
  text: {
    color: "#303838",
    fontWeight: "bold",
    fontSize: 20,
  },
  subContainer:{
    backgroundColor: '#F5F5EF',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'white',
    margin: 10,
    padding: 10
  },
  applcaitionContainer:{
    backgroundColor: '#F5F5EF',
    width: 350,
    borderRadius: 25,
    borderWidth: 1,
    margin: 10,
    padding: 10
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
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            {/* <Text style={styles.text}>Job Details:</Text> */}
            <Text style={styles.text}>{created_by}</Text>
            <Text>Position: {title}</Text>
            <Text>Start Date: {date}</Text>
            <Text>Location: {location}</Text>
            <Text>Vacancies: {vacancies}</Text>
            <Text>pph:{pay}</Text>
            <Text>{description}</Text>
          </View>
          <Text style={styles.title}>Applications</Text>
          {applicants.map(applicant => {
            console.log(applicant, "here");
            return (
              <View style={styles.applcaitionContainer}>
                <Text style={styles.text}>{applicant.display_name}</Text>
                <TouchableOpacity
                style={styles.button}
                  onPress={() => {
                    api.postBusinessApproval(applicant.applications, "Approve");
                  }}
                >
                  <Text>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.button}
                  onPress={() => {
                    api.postBusinessApproval(applicant.applications, "Reject");
                  }}
                >
                  <Text>Reject</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Text>Contact</Text>
                </TouchableOpacity>
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
