import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";


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
    fontSize: 20,
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
    color: "#F5F5EF"
  },
  textGrey: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#303838"
  },
  buttonDelete: {
    alignItems: "center",
    backgroundColor: "#F5A758",
    padding: 10,
    borderRadius: 40,
    borderColor: "#303838",
    borderWidth: 1,
    margin: 4,
    width: 150
  }
});

class BusinessJobListCard extends React.Component {
  render() {
    const {
      title,
      created_by,
      vacancies,
      location,
      pay,
      start_time,
      duration,
      description,
      date
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

            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  this.props.navigation.navigate("BusinessApplicantList", {
                    job_id: this.props.job_id,
                    name: "BusinessApplicantList"
                  })
                }
              >
                <Text style={styles.textWhite}>Applicants</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.buttonDelete}>
                <Text style={styles.textGrey}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
export default BusinessJobListCard;
