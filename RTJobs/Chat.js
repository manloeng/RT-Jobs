import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import apiKey from './opentokConfig';
import Questions from './Questions';
import * as api from './api';

const OTSessionId = "2_MX40NjQwOTQzMn5-MTU2NjgxMDkwNzk3NH42Q2RqWm9BL3hNSHoxOG1Ma1hMeC9rWlB-UH4";

class Chat extends Component {

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerTitle: params ? params.headTitle : 'Chat',
      headerRight: <TouchableOpacity onPress={() => params.handleThis()} style={{ marginRight: 10, padding: 10, borderColor: '#047b84', borderWidth: 2, borderRadius: 40 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#000000' }}>{params ? params.buttonText : 'Switch'}</Text>
      </TouchableOpacity>
    }
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
        if (event.data) {
          if (event.connectionId !== this.session.getSessionInfo().connection.connectionId) {
            const newMessage = JSON.parse(event.data);
            newMessage[0].user = { _id: 2 }
            if (this.state.messages.length) {
              if (newMessage[0]._id !== this.state.messages[0]._id) {
                this.onSend(newMessage)
              }
            } else {
              this.onSend(newMessage)
            }
            this.setState({
              signal: { data: '', type: '' }
            });
          }
        }
      },
    };
  }

  componentDidMount() {
    const { business, created_by, display_name, messages } = this.props.navigation.state.params;
    this.getToken(OTSessionId);
    this.setMessages(messages);
    this.props.navigation.setParams({
      handleThis: this.changeChat,
      headTitle: business ? display_name : created_by,
      buttonText: this.state.video ? 'Chat' : 'Interview'
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.video !== this.state.video) {
      this.props.navigation.setParams({
        buttonText: this.state.video ? 'Chat' : 'Interview'
      });
    }
    if(prevState.messages.length !== this.state.messages.length) {
      const { applications } = this.props.navigation.state.params;
      api.patchApplicationMessages(applications, this.state.messages).catch(err => {console.log(err)});
    }
  }

  componentWillUnmount() {
    const { reloadFunc = null } = this.props.navigation.state.params;
    if (reloadFunc) reloadFunc();
  }

  setMessages = (messages) => {
    if (messages) this.setState({messages})
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

  renderBubble(props) {
    return (<Bubble {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#047b84'
        }
      }} />
    )
  }

  render() {
    const { video, messages, token, signal } = this.state;
    const { height, width } = Dimensions.get('window');
    const { business, applications } = this.props.navigation.state.params;
    if (!token) return <Text>Loading...</Text>
    if (video) {
      return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: "#047B84" }}>
          <OTSession apiKey={apiKey} sessionId={OTSessionId} token={token} style={{ flex: 6, flexDirection: "column", justifyContent: 'flex-start', alignItems: "center" }}>
            <OTPublisher style={{
              position: 'absolute', top: 10, right: 10, width: 90, height: 90, zIndex: 1000
            }} />
            <OTSubscriber style={{ width: width * 0.8, height: height * 0.6, top: 110 }} />
          </OTSession>
          {business && <Questions style={{ flex: 1 }} id={applications}/>}
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
          messages={messages}
          onSend={messages => {
            this.onSend(messages);
            this.sendSignal(messages);
          }}
          renderBubble={this.renderBubble.bind(this)}
          renderAvatar = {null}
          user={{
            _id: 1,
          }}
        />
      </View>
    )
  }
}

export default Chat