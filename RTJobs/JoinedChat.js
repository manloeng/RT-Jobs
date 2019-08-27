import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet, FlatList, Text } from 'react-native';
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import Messages from './Messages';
import apiKey from './opentokConfig';

const OTSessionId = "2_MX40NjQwOTQzMn5-MTU2NjgxMDkwNzk3NH42Q2RqWm9BL3hNSHoxOG1Ma1hMeC9rWlB-UH4";

export default class ChatTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: false,
      apiKey,
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
            signal: { data: '', type: '' }
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
  _keyExtractor = (item, index) => index.toString();
  _renderItem = ({ item }) => (
    <Text style={styles.item}>{item.data}</Text>
  );
  render() {
    const { apiKey, token, video, } = this.state;
    if (!token) return <Text>umm text chat might pop up?</Text>
    return (
      <View style={{ flex: 1 }}>
        <Button onPress={() => { this.setState(currState => ({ video: !currState.video })) }} title={`switch to ${video ? 'chat' : 'video'}`} />
        {
          video
            ? (
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <OTSession apiKey={apiKey} sessionId={OTSessionId} token={token}>
                  <OTPublisher style={{ width: 100, height: 100 }} />
                  <OTSubscriber style={{ width: 100, height: 100 }} />
                </OTSession>
              </View>
            )
            : (
              <View>
                <OTSession
                  apiKey={apiKey}
                  sessionId={OTSessionId}
                  token={token}
                  signal={this.state.signal}
                  eventHandlers={this.sessionEventHandlers}
                  ref={(instance) => {
                    this.session = instance;
                  }}
                />
                <Messages />
                {/* <GiftedChat
                  messages={this.state.messages}
                  onSend={messages => this.onSend(messages)}
                  user={{
                    _id: 1,
                  }}
                /> */}
                {/* <TextInput
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
                />*/}
              </View>
            )
        }
      </View>
    );
  }
  componentDidMount() {
    this.getToken(OTSessionId);
  }

  getToken = (sessionId) => {
    fetch(`https://rt-jobs-room-server.herokuapp.com/token/${sessionId}`)
      .then(response => response.json())
      .then(({ token }) => {
        this.setState({ token })
      })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }), () => {console.log(this.state.messages)})
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