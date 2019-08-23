import { createStackNavigator, createAppContainer } from "react-navigation";
import Homepage from "./Homepage";
import BusinessLogin from "./BusinessLogin";
import ApplicantLogin from "./ApplicantLogin";
import ApplicantSignUp from "./ApplicantSignUp";

const MainNavigator = createStackNavigator({
  Home: { screen: Homepage },
  BusinessLogin: { screen: BusinessLogin },
  ApplicantLogin: { screen: ApplicantLogin },
  ApplicantSignUp: { screen: ApplicantSignUp }
});

const App = createAppContainer(MainNavigator);

export default App;
