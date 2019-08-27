import { createStackNavigator, createAppContainer } from "react-navigation";
import Homepage from "./Homepage";
import BusinessLogin from "./BusinessLogin";
import ApplicantLogin from "./ApplicantLogin";
import ApplicantSignUp from "./ApplicantSignUp";
import BusinessSignup from "./BusinessSignup";
import BusinessJobList from "./BusinessJobList";
import BusinessPostJob from "./BusinessPostJob";
import ApplicantAvailableJobs from "./ApplicantAvailableJobs";
import ApplicantJobsApplied from "./ApplicantJobsApplied";
import BusinessApplicantList from "./BusinessApplicantList";

const MainNavigator = createStackNavigator({
  Home: { screen: Homepage },
  BusinessLogin: { screen: BusinessLogin },
  ApplicantLogin: { screen: ApplicantLogin },
  ApplicantSignUp: { screen: ApplicantSignUp },
  BusinessSignup: { screen: BusinessSignup },
  BusinessJobList: { screen: BusinessJobList },
  BusinessPostJob: { screen: BusinessPostJob },
  ApplicantAvailableJobs: { screen: ApplicantAvailableJobs },
  ApplicantJobsApplied: { screen: ApplicantJobsApplied },
  BusinessApplicantList: { screen: BusinessApplicantList }
});

const App = createAppContainer(MainNavigator);

export default App;
