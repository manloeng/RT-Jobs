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
      <View>
        <Text>Job Details</Text>
        <View>
          <Text>{created_by}</Text>
          <Text>{title}</Text>
          <Text>{date}</Text>
          <Text>{location}</Text>
          <Text>{vacancies}</Text>
          <Text>{pay}</Text>
          <Text>{description}</Text>
        </View>
        <Text>Applications</Text>
        {applicants.map(applicant => {
          console.log(applicant, "here");
          return (
            <View>
              <Text>{applicant.display_name}</Text>
              <TouchableOpacity
                onPress={() => {
                  api.postBusinessApproval(applicant.applications, "Approve");
                }}
              >
                <Text>Confirm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  api.postBusinessApproval(applicant.applications, "Reject");
                }}
              >
                <Text>Reject</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Contact</Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
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
