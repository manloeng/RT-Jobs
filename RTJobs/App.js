import { createStackNavigator, createAppContainer } from "react-navigation";
import Homepage from "./Homepage";
import BusinessLogin from "./BusinessLogin";
import ApplicantLogin from "./ApplicantLogin";
import VideoCallTest from "./VideoCallTest";
import ChatTest from "./ChatTest";

const MainNavigator = createStackNavigator({
  Home: { screen: Homepage },
  BusinessLogin: { screen: BusinessLogin },
  ApplicantLogin: { screen: ApplicantLogin },
  VideoCallTest: {screen: VideoCallTest},
  ChatTest: {screen: ChatTest}
});

const App = createAppContainer(MainNavigator);

export default App;
