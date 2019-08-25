import React from "react";
import { TouchableOpacity, StyleSheet, Text, Button, View } from "react-native";

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto"
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    alignItems: "center",
    color: "#4c4f4f",
    fontFamily: "monospace"
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

class Homepage extends React.Component {
  static navigationOptions = {
    title: "RT Jobs"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.title}>RT Jobs</Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            alignItems: "center",
            color: "#4c4f4f"
          }}
        >
          I am a:
        </Text>
        <View
          style={{
            width: 100,
            height: 35,
            alignContent: "flex-end",
            margin: 10
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate("BusinessLogin", { name: "Business" })}
          >
            <Text style={styles.text}> Business</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: 100,
            height: 35,
            alignContent: "flex-end",
            margin: 10
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate("ApplicantLogin", { name: "Applicant" })}
          >
            <Text style={styles.text}> Applicant </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Homepage;
