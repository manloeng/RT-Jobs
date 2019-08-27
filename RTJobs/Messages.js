import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet, FlatList, Text } from 'react-native';
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import apiKey from './opentokConfig';

const OTSessionId = "2_MX40NjQwOTQzMn5-MTU2NjgxMDkwNzk3NH42Q2RqWm9BL3hNSHoxOG1Ma1hMeC9rWlB-UH4";

class Messages extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerTitle: <Text>CHAT</Text>,
      headerRight: <Button
        title="Switch"
        onPress={() => params.handleThis()} />
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      video: false,
      token: null,
      signal: {
        data: '',
        type: '',
      },
      messages: [],
    };
    this.sessionEventHandlers = {
      signal: (event) => {
        console.log(event)
        if (event.data) {
          if (event.connectionId !== this.session.getSessionInfo().connection.connectionId) {
            const newMessage = JSON.parse(event.data);
            newMessage[0].user = { _id: 2 }
            this.onSend(newMessage)
            this.setState({
              signal: { data: '', type: '' }
            });
          }
        }
      },
    };
  }

  componentDidMount() {
    this.getToken(OTSessionId);
    this.props.navigation.setParams({
      handleThis: this.changeChat
    });
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  sendSignal(messages) {
    this.setState({
      signal: {
        type: '',
        data: JSON.stringify(messages),
      }
    });
  }

  changeChat = () => {
    this.setState(currState => ({ video: !currState.video }));
  }

  getToken = (sessionId) => {
    fetch(`https://rt-jobs-room-server.herokuapp.com/token/${sessionId}`)
      .then(response => response.json())
      .then(({ token }) => {
        this.setState({ token })
      })
  }

  onSend = (messages = []) => {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    const { video, messages, token, signal } = this.state;
    if (!token) return <Text>Loading...</Text>
    if (video) {
      return (
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <OTSession apiKey={apiKey} sessionId={OTSessionId} token={token}>
            <OTPublisher style={{ width: 100, height: 100 }} />
            <OTSubscriber style={{ width: 100, height: 100 }} />
          </OTSession>
        </View>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <OTSession
          apiKey={apiKey}
          sessionId={OTSessionId}
          token={token}
          signal={signal}
          eventHandlers={this.sessionEventHandlers}
          ref={(instance) => {
            this.session = instance;
          }}
        />
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => {
            this.onSend(messages);
            this.sendSignal(messages);
          }}
          user={{
            _id: 1,
          }}
        />
      </View>
    )
  }
}

export default Messages