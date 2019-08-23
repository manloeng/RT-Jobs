import Homepage from "./Homepage";
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator({
  Home: { screen: Homepage }
});

const App = createAppContainer(MainNavigator);

export default App;
