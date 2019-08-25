import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet, FlatList, Text } from 'react-native';
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';
import apiKey from './opentokConfig';

export default class ChatTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: false,
      apiKey,
      sessionId: null,
      token: null,
      signal: {
        data: '',
        type: '',
      },
      text: '',
      messages: [],
    };
    this.sessionEventHandlers = {
      signal: (event) => {
        if (event.data) {
          const myConnectionId = this.session.getSessionInfo().connection.connectionId;
          const oldMessages = this.state.messages;
          const messages = event.connectionId === myConnectionId ? [...oldMessages, { data: `Me: ${event.data}` }] : [...oldMessages, { data: `Other: ${event.data}` }];
          this.setState({
            messages,
          });
        }
      },
    };
  }
  sendSignal() {
    if (this.state.text) {
      this.setState({
        signal: {
          type: '',
          data: this.state.text,
        },
        text: '',
      });
    }
  }
  _keyExtractor = (item, index) => index;
  _renderItem = ({ item }) => (
    <Text style={styles.item}>{item.data}</Text>
  );
  render() {
    const { apiKey, sessionId, token, video } = this.state;
    if (!sessionId || !token) return <Text>umm text chat might pop up?</Text>
    return (
      <View style={{ flex: 1 }}>
        <Button onPress={() => { this.setState(currState => ({ video: !currState.video })) }} title={`switch to ${video ? 'chat' : 'video'}`} />
        {
          video
            ? (
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <OTSession apiKey={apiKey} sessionId={"2_MX40NjQwOTQzMn5-MTU2Njc0MDM5OTgzMn5ibUR1cHBtN0t6Y21Ra2ZjQjFvUHJGNHd-UH4"} token={"T1==cGFydG5lcl9pZD00NjQwOTQzMiZzaWc9NjNkZDg0ZmNhZjVjMGEzYWQ4MzdlMzEzYTA3ZjUzMGMzNDE0YjdkNDpzZXNzaW9uX2lkPTJfTVg0ME5qUXdPVFF6TW41LU1UVTJOamMwTURNNU9UZ3pNbjVpYlVSMWNIQnROMHQ2WTIxUmEyWmpRakZ2VUhKR05IZC1VSDQmY3JlYXRlX3RpbWU9MTU2Njc0MDQwMCZub25jZT0wLjEzNzM5MDA1MjE5NzA2MzAyJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE1NjY4MjY4MDAmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0="}>
                  <OTPublisher style={{ width: 100, height: 100 }} />
                  <OTSubscriber style={{ width: 100, height: 100 }} />
                </OTSession>
              </View>
            )
            : (
              <View>
                <OTSession
                  apiKey={apiKey}
                  sessionId={"2_MX40NjQwOTQzMn5-MTU2Njc0MDM5OTgzMn5ibUR1cHBtN0t6Y21Ra2ZjQjFvUHJGNHd-UH4"}
                  token={"T1==cGFydG5lcl9pZD00NjQwOTQzMiZzaWc9NjNkZDg0ZmNhZjVjMGEzYWQ4MzdlMzEzYTA3ZjUzMGMzNDE0YjdkNDpzZXNzaW9uX2lkPTJfTVg0ME5qUXdPVFF6TW41LU1UVTJOamMwTURNNU9UZ3pNbjVpYlVSMWNIQnROMHQ2WTIxUmEyWmpRakZ2VUhKR05IZC1VSDQmY3JlYXRlX3RpbWU9MTU2Njc0MDQwMCZub25jZT0wLjEzNzM5MDA1MjE5NzA2MzAyJnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE1NjY4MjY4MDAmaW5pdGlhbF9sYXlvdXRfY2xhc3NfbGlzdD0="}
                  signal={this.state.signal}
                  eventHandlers={this.sessionEventHandlers}
                  ref={(instance) => {
                    this.session = instance;
                  }}
                />
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  onChangeText={(text) => { this.setState({ text }); }}
                  value={this.state.text}
                />
                <Button
                  onPress={() => { this.sendSignal(); }}
                  title="Send Message"
                />
                <FlatList
                  data={this.state.messages}
                  renderItem={this._renderItem}
                  keyExtractor={this._keyExtractor}
                />
              </View>
            )
        }
      </View>
    );
  }
  componentDidMount() {
    fetch("https://rt-jobs-room-server.herokuapp.com/")
      .then(response => response.json())
      .then(({ sessionId, token }) => {
        this.setState({ sessionId, token })
      })
      .catch(error => console.log(error))
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  mainText: {
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
  }
})