import React from "react";
import {
  Text,
  Button,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import { TextInput, FlatList } from "react-native-gesture-handler";
import * as api from "./api";
import JobCard from "./JobCard";

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
    backgroundColor: "#F5F5EF",
    color: "#047B84",
    padding: 10,
    borderRadius: 40,
    borderColor: "#303838",
    borderWidth: 1,
    margin: 4
  },
  text: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

class ApplicantAvailableJobs extends React.Component {
  state = { jobs: null, isLoading: true };

  static navigationOptions = {
    title: "Available Jobs"
  };

  render() {
    const { navigate } = this.props.navigation;
    const { jobs, isLoading } = this.state;
    const { localId, display_name } = this.props.navigation.state.params;
    if (isLoading)
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    return (
      <View
        style={{
          flex: 2,
          backgroundColor: "#047B84"
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigate("ApplicantAvailableJobs", {
                name: "ApplicantAvailableJobs"
              })
            }
          >
            <Text style={styles.text}>Jobs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              this.props.navigation.navigate("ApplicantJobsApplied", {
                localId
              })
            }
          >
            <Text style={styles.text}>Applied</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {jobs.map(job => {
            return (
              <JobCard
                {...job}
                u_uid={localId}
                key={job.job_id}
                navigation={this.props.navigation}
                display_name={display_name}
                updateJobs={this.updateJobs}
              ></JobCard>
            );
          })}
        </ScrollView>
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

  updateJobs = (u_uid, job_id) => {
    this.setState(currentState => {
      jobs = currentState.jobs.map(job => {
        if (job.job_id === job_id) {
          job.applicants.push(u_uid);
          return job;
        } else return job;
      });
      return jobs;
    });
  };
}
export default ApplicantAvailableJobs;
