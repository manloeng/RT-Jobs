import { createStackNavigator, createAppContainer } from "react-navigation";
import Homepage from "./Homepage";
import BusinessLogin from "./BusinessLogin";
import ApplicantLogin from "./ApplicantLogin";
import ApplicantSignUp from "./ApplicantSignUp";
import BusinessSignup from "./BusinessSignup";
import BusinessJobList from "./BusinessJobList";
import BusinessPostJob from "./BusinessPostJob";

const MainNavigator = createStackNavigator({
  Home: { screen: Homepage },
  BusinessLogin: { screen: BusinessLogin },
  ApplicantLogin: { screen: ApplicantLogin },
  ApplicantSignUp: { screen: ApplicantSignUp },
  BusinessSignup: { screen: BusinessSignup },
  BusinessJobList: { screen: BusinessJobList },
  BusinessPostJob: { screen: BusinessPostJob }
});

const App = createAppContainer(MainNavigator);

export default App;
