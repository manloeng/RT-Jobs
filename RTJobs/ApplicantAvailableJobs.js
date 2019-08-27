import React from "react";
import { Text, Button, View, TouchableOpacity } from "react-native";
import { TextInput, FlatList } from "react-native-gesture-handler";
import * as api from "./api";
import JobCard from "./JobCard";

class ApplicantAvailableJobs extends React.Component {
  state = { jobs: null, isLoading: true };

  static navigationOptions = {
    title: "RT Jobs"
  };

  render() {
    const { navigate } = this.props.navigation;
    const { jobs, isLoading } = this.state;
    console.log(jobs);
    if (isLoading)
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() =>
            navigate("ApplicantAvailableJobs", {
              name: "ApplicantAvailableJobs"
            })
          }
        >
          <Text>Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigate("ApplicantJobsApplied", {
              name: "ApplicantJobsApplied"
            })
          }
        >
          <Text>Applied</Text>
        </TouchableOpacity>
        <View>
          {jobs.map(job => {
            return <JobCard {...job} key={job.job_id}></JobCard>;
          })}
        </View>
      </View>
    );
  }

  componentDidMount() {
    this.fetchJobs();
  }

  fetchJobs = () => {
    api
      .getJobs()
      .then(jobs => {
        this.setState({ jobs, isLoading: false });
      })
      .catch(e => console.log(e));
  };
}
export default ApplicantAvailableJobs;
