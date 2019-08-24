import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';
import apiKey from './opentokConfig';


class VideoCallTest extends Component {
  state = {
    apiKey,
    sessionId: null,
    token: null
  }
  render() {
    const { apiKey, sessionId, token } = this.state;
    if (!sessionId || !token) return <Text>Could not connect</Text>
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <OTSession apiKey={apiKey} sessionId={sessionId} token={token}>
          <OTPublisher style={{ width: 100, height: 100 }} />
          <OTSubscriber style={{ width: 100, height: 100 }} />
        </OTSession>
      </View>
    );
  }
  componentDidMount() {
    fetch("https://rt-jobs-room-server.herokuapp.com/")
      .then(response => response.json())
      .then(({sessionId, token}) => {
        this.setState({sessionId, token})
      })
      .catch(error => console.log(error))
  }
}

export default VideoCallTest;