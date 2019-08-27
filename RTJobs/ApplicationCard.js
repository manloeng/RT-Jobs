import React from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import Chat from "./Chat";
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

class ApplicationCard extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    const {
      created_at,
      confirmation,
      token,
      display_name,
      created_by,
      description,
      duration,
      date,
      location,
      pay,
      start_time,
      title,
      vacancies
    } = this.props;
    console.log(confirmation, "Y/N");
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {confirmation === "null" && (
          <TouchableOpacity style={styles.button} disabled={true}>
            <Text style={styles.text}>Pending</Text>
          </TouchableOpacity>
        )}

        {confirmation === "offer" && (
          <TouchableOpacity
            style={styles.button}
            onPress={(e, navigate) => {
              this.handlePress(e, "accepted");
            }}
          >
            <Text style={styles.text}>Accept?</Text>
          </TouchableOpacity>
        )}

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
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigate("Chat", {
              display_name,
              created_by,
              token
            })
          }
        >
          <Text style={styles.text}>Contact</Text>
        </TouchableOpacity>
      </View>
    );
  }
  handlePress = (e, confirmation) => {
    const { applications } = this.props;
    api
      .patchApplication(applications, confirmation)
      .then(application => {
        console.log(application, "aaaa");
      })
      .catch(e => console.log(e));
  };
}
export default ApplicationCard;
