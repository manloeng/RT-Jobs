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

class BusinessPostJob extends React.Component {
  static navigationOptions = {
    title: "RT Jobs"
  };
  state = {
    text: ""
  };
  render() {
    return (
      <View>
        <Text>Post a job</Text>
        <Text>Title: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => {
            this.setState({ text });
          }}
          value={this.state.text}
        />
        <Text>Vacancies: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => {
            this.setState({ text });
          }}
          value={this.state.text}
        />

        <Text>Location: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => {
            this.setState({ text });
          }}
          value={this.state.text}
        />
        <Text>Pay: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => {
            this.setState({ text });
          }}
          value={this.state.text}
        />
        <Text>Start time: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => {
            this.setState({ text });
          }}
          value={this.state.text}
        />
        <Text>Duration: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => {
            this.setState({ text });
          }}
          value={this.state.text}
        />
        <Text>Description: </Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => {
            this.setState({ text });
          }}
          value={this.state.text}
        />
        <View>
          <TouchableOpacity>
            <Text>Post Job</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  onChangeText = e => {
    console.log(e.nativeEvent.value);
    this.setState({ text: e.nativeEvent.value });
  };
}
export default BusinessPostJob;
