import { createStackNavigator, createAppContainer } from "react-navigation";
import Homepage from "./Homepage";
import BusinessLogin from "./BusinessLogin";
import ApplicantLogin from "./ApplicantLogin";
import VideoCallTest from "./VideoCallTest";
import ChatTest from "./ChatTest";
import JoinedChat from './JoinedChat';
import UnmounterTest from './UnmounterTest';
import Messages from './Messages';

const MainNavigator = createStackNavigator({
  Home: { screen: Homepage },
  BusinessLogin: { screen: BusinessLogin },
  ApplicantLogin: { screen: ApplicantLogin },
  //VideoCallTest: {screen: VideoCallTest},
  // ChatTest: {screen: ChatTest}
  JoinedChat: { screen: JoinedChat },
  Messages: {screen: Messages}
  // UnmounterTest: { screen: UnmounterTest }
});

const App = createAppContainer(MainNavigator);

export default App;
