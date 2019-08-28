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
    margin: 4,
    width: 150
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#F5F5EF"
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
  },
  textWhite: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#303838"
  },
  buttonGrey: {
    alignItems: "center",
    backgroundColor: "#D7D9D9",
    padding: 10,
    borderRadius: 40,
    borderColor: "#303838",
    borderWidth: 1,
    margin: 4,
    width: 150
  },
  buttonOrange: {
    alignItems: "center",
    backgroundColor: "#F5A758",
    padding: 10,
    borderRadius: 40,
    borderColor: "#303838",
    borderWidth: 1,
    margin: 4,
    width: 150
  },
  buttonGreen: {
    alignItems: "center",
    backgroundColor: "#8FCB5B",
    padding: 10,
    borderRadius: 40,
    borderColor: "#303838",
    borderWidth: 1,
    margin: 4,
    width: 150
  },
  buttonLightGreen: {
    alignItems: "center",
    backgroundColor: "#D2F2A6",
    padding: 10,
    borderRadius: 40,
    borderColor: "#303838",
    borderWidth: 1,
    margin: 4,
    width: 150
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
          <View style={{ alignSelf: "center" }}>
            <Text style={styles.cardText}>Location: {location}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            {confirmation === "null" && (
              <TouchableOpacity style={styles.buttonGrey} disabled={true}>
                <Text style={styles.textWhite}>Pending</Text>
              </TouchableOpacity>
            )}

            {confirmation === "rejected" && (
              <TouchableOpacity style={styles.buttonOrange} disabled={true}>
                <Text style={styles.textWhite}>Rejected</Text>
              </TouchableOpacity>
            )}

            {confirmation === "accepted" && (
              <TouchableOpacity style={styles.buttonGreen} disabled={true}>
                <Text style={styles.textWhite}>Accepted</Text>
              </TouchableOpacity>
            )}

            {confirmation === "offer" && (
              <TouchableOpacity
                style={styles.buttonLightGreen}
                onPress={(e, navigate) => {
                  this.handlePress(e, "accepted");
                }}
              >
                <Text style={styles.textWhite}>Accept?</Text>
              </TouchableOpacity>
            )}
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
        </View>
      </ScrollView>
    );
  }
  handlePress = (e, confirmation) => {
    const { applications } = this.props;
    api
      .patchApplication(applications, confirmation)
      .then(application => {
        this.props.updateApplications(application);
      })
      .catch(e => console.log(e));
  };
}
export default ApplicationCard;
