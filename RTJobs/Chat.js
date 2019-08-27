import React from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";

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

class Chat extends React.Component {
  render() {
    const {
      display_name,
      created_by,
      token
    } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Display Name: {display_name} </Text>
        <Text>Created By: {created_by} </Text>
        <Text>Token: {token} </Text>
      </View>
    );
  }
}
export default Chat;
