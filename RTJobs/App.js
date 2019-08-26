import { createStackNavigator, createAppContainer } from "react-navigation";
import Homepage from "./Homepage";
import BusinessLogin from "./BusinessLogin";
import ApplicantLogin from "./ApplicantLogin";
import ApplicantSignUp from "./ApplicantSignUp";
import BusinessSignup from "./BusinessSignup";
import ApplicantAvailableJobs from "./ApplicantAvailableJobs";
import ApplicantJobsApplied from "./ApplicantJobsApplied";

const MainNavigator = createStackNavigator({
  Home: { screen: Homepage },
  BusinessLogin: { screen: BusinessLogin },
  ApplicantLogin: { screen: ApplicantLogin },
  ApplicantSignUp: { screen: ApplicantSignUp },
  BusinessSignup: { screen: BusinessSignup },
  ApplicantAvailableJobs: { screen: ApplicantAvailableJobs },
  ApplicantJobsApplied: { screen: ApplicantJobsApplied }
});

const App = createAppContainer(MainNavigator);

export default App;
