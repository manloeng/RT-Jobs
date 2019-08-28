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
import ApplicationCard from "./ApplicationCard";

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

class ApplicantJobsApplied extends React.Component {
  state = { applications: null, isLoading: true };

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Applied Jobs",
      headerRight: (
        <TouchableOpacity
          onPress={() => params.handleThis()}
          style={{
            marginRight: 10,
            padding: 10,
            borderColor: "#047b84",
            borderWidth: 2,
            borderRadius: 40
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "#111111" }}>
            Jobs
          </Text>
        </TouchableOpacity>
      )
    };
  };

  render() {
    const { navigate } = this.props.navigation;
    const { applications, isLoading } = this.state;
    console.log(applications, "applications");
    const { localId } = this.props.navigation.state.params;
    if (isLoading)
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    return (
      <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
        <ScrollView>
          {applications.map(application => {
            return (
              <ApplicationCard
                {...application}
                key={application.app_id}
                navigation={this.props.navigation}
                updateApplications={this.updateApplications}
              ></ApplicationCard>
            );
          })}
        </ScrollView>
      </View>
    );
  }

  componentDidMount() {
    this.fetchApplications();

    this.props.navigation.setParams({
      handleThis: this.changeNavigate
    });
  }

  changeNavigate = () => {
    const { localId } = this.props.navigation.state.params;
    this.props.navigation.navigate("ApplicantAvailableJobs", {
      localId
    });
  };

  fetchApplications = () => {
    const { localId } = this.props.navigation.state.params;
    api
      .getApplications(localId)
      .then(applications => {
        this.setState({ applications, isLoading: false });
      })
      .catch(e => console.log(e));
  };

  updateApplications = ({ app_id, confirmation }) => {
    this.setState(currentState => {
      applications = currentState.applications.map(application => {
        if (application.applications === app_id) {
          application.confirmation = confirmation;
          return application;
        } else return application;
      });
      return applications;
    });
  };
}
export default ApplicantJobsApplied;
