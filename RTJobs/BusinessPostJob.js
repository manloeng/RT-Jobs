import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";
import * as api from "./api";

class BusinessPostJob extends React.Component {
  static navigationOptions = {
    title: "RT Jobs"
  };
  state = {
    title: "",
    vacancies: "",
    description: "",
    location: "",
    pay: "",
    start_time: "",
    duration: ""
  };
  render() {
    return (
      <View>
        <Text>Post a job</Text>
        <Text>Title: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChange={e => {
            this.onChangeText(e, "title");
          }}
        />
        <Text>Vacancies: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChange={e => {
            this.onChangeText(e, "vacancies");
          }}
        />

        <Text>Location: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChange={e => {
            this.onChangeText(e, "location");
          }}
        />
        <Text>Pay: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChange={e => {
            this.onChangeText(e, "pay");
          }}
        />
        <Text>Start time: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChange={e => {
            this.onChangeText(e, "start_time");
          }}
        />
        <Text>Duration: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChange={e => {
            this.onChangeText(e, "duration");
          }}
        />
        <Text>Description: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChange={e => {
            this.onChangeText(e, "description");
          }}
        />
        <View>
          <TouchableOpacity
            onPress={(e, navigate) => {
              this.handleSubmit(e, navigate);
            }}
          >
            <Text>Post Job</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  onChangeText = (e, name) => {
    const { text } = e.nativeEvent;
    this.setState({ [name]: text });
  };
  handleSubmit = e => {
    const {
      description,
      location,
      pay,
      duration,
      start_time,
      title,
      vacancies
    } = this.state;
    e.preventDefault();
    const { businessId } = this.props.navigation.state.params;
    const jobDetails = {
      created_by: "Hello",
      date: Date.now(),
      description,
      location,
      pay,
      duration,
      start_time,
      title,
      vacancies,
      b_uid: businessId
    };
    api
      .postBusinessJob(jobDetails)
      .then(() => {
        this.props.navigation.navigate("BusinessJobList");
      })
      .catch(e => console.log(e));
  };
}
export default BusinessPostJob;
