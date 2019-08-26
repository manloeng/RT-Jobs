import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';
import apiKey from './opentokConfig';

class VideoCallTest extends Component {
  constructor(props) {
    super(props);
    this.apiKey = apiKey;
    this.sessionId = '2_MX40NjQwOTQzMn5-MTU2NjgxMDkwNzk3NH42Q2RqWm9BL3hNSHoxOG1Ma1hMeC9rWlB-UH4';
    this.token = "T1==cGFydG5lcl9pZD00NjQwOTQzMiZzaWc9YzA3OWMzNTE0ZDRhNDM1N2FmYWExMTMzYjY3YjU0YWZlNDJjNDEyZDpzZXNzaW9uX2lkPTJfTVg0ME5qUXdPVFF6TW41LU1UVTJOamd4TURrd056azNOSDQyUTJScVdtOUJMM2hOU0hveE9HMU1hMWhNZUM5cldsQi1VSDQmY3JlYXRlX3RpbWU9MTU2NjgyMjE1NCZub25jZT0wLjA0MTY0NjMwMTg0Njk1OTUmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU2NjkwODU1NCZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";
  }
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
      <Text>hrllo?????</Text>
        <OTSession apiKey={this.apiKey} sessionId={this.sessionId} token={this.token}>
          <OTPublisher style={{ width: 100, height: 100 }} />
          <OTSubscriber style={{ width: 100, height: 100 }} />
        </OTSession>
      </View>
    );
  }
}

export default VideoCallTest;