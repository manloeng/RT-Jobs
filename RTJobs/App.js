import { createStackNavigator, createAppContainer } from "react-navigation";
import Homepage from "./Homepage";
import BusinessLogin from "./BusinessLogin";
import ApplicantLogin from "./ApplicantLogin";
import VideoCallTest from "./VideoCallTest";

const MainNavigator = createStackNavigator({
  Home: { screen: Homepage },
  BusinessLogin: { screen: BusinessLogin },
  ApplicantLogin: { screen: ApplicantLogin },
  VideoCallTest: {screen: VideoCallTest}
});

const App = createAppContainer(MainNavigator);

export default App;
