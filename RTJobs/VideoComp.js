import React, { Component } from 'react';
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';
import {View} from 'react-native';

class VideoComp extends Component {
  render() {
    const { apiKey, sessionId, token } = this.props;
    console.log(apiKey, sessionId, token);
    return (
      <View>
        <OTSession apiKey={apiKey} sessionId={sessionId} token={token}>
          <OTPublisher style={{ width: 100, height: 100 }} />
          <OTSubscriber style={{ width: 100, height: 100 }} />
        </OTSession>
      </View>
    );
  }
}

export default VideoComp;