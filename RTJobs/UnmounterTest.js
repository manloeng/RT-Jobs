import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import JoinedChat from './JoinedChat';
import VideoCallTest from './VideoCallTest';

class UnmounterTest extends React.Component {
  state={
    show: true
  }
  render() {
    if (this.state.show) {
      return (
        <VideoCallTest/>
      )
    }
    return <View ><Text>Chat Disconnected</Text></View>
  }
  stopShowing = () => {
    this.setState({show: false})
  }
}

export default UnmounterTest