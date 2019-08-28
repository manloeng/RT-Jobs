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

const styles = StyleSheet.create({
  text: {
    color: "#F5F5EF",
    fontWeight: "bold",
    fontSize: 20
  },
  textarea: {
    backgroundColor: "#F5F5EF",
    borderRadius: 5,
    borderColor: "#303838",
    borderWidth: 1,
    width: 200,
    marginTop: 5,
    marginBottom: 5,
    color: "#303838",
    fontWeight: "bold",
    fontSize: 15,
    width: 300
  },
  button: {
    alignItems: "center",
    backgroundColor: "#D7D9D9",
    padding: 10,
    borderRadius: 40,
    borderColor: "#303838",
    borderWidth: 1,
    margin: 4,
    width: 200
  },
  textpost: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#303838"
  }
});

class BusinessPostJob extends React.Component {
  static navigationOptions = {
    title: "Post Job"
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
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "center",

            backgroundColor: "#047B84",
            padding: 5
          }}
        >
          <Text style={styles.text}>Title: </Text>
          <TextInput
            style={styles.textarea}
            onChange={e => {
              this.onChangeText(e, "title");
            }}
            placeholder="Job title"
          />
          <Text style={styles.text}>Vacancies: </Text>
          <TextInput
            style={styles.textarea}
            onChange={e => {
              this.onChangeText(e, "vacancies");
            }}
            placeholder="Number of vacancies"
          />

          <Text style={styles.text}>Location: </Text>
          <TextInput
            style={styles.textarea}
            onChange={e => {
              this.onChangeText(e, "location");
            }}
            placeholder="Business location"
          />
          <Text style={styles.text}>Pay: </Text>
          <TextInput
            style={styles.textarea}
            onChange={e => {
              this.onChangeText(e, "pay");
            }}
            placeholder="Hourly rate"
          />
          <Text style={styles.text}>Start time: </Text>
          <TextInput
            style={styles.textarea}
            onChange={e => {
              this.onChangeText(e, "start_time");
            }}
            placeholder="Shift start time"
          />
          <Text style={styles.text}>Duration: </Text>
          <TextInput
            style={styles.textarea}
            onChange={e => {
              this.onChangeText(e, "duration");
            }}
            placeholder="Shift length"
          />
          <Text style={styles.text}>Description: </Text>
          <TextInput
            style={[styles.textarea, { height: 100 }]}
            onChange={e => {
              this.onChangeText(e, "description");
            }}
            placeholder="Job details"
          />
          <View style={styles.text}>
            <TouchableOpacity
              style={styles.button}
              onPress={(e, navigate) => {
                this.handleSubmit(e, navigate);
              }}
            >
              <Text style={styles.textpost}>Post Job</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
