import React from "react";
import { StyleSheet, Text, Button, View , Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Roboto"
  },
  title: {
    fontSize: 50,
    color: 'white',
    fontWeight: "bold",
    alignItems: "center",
    margin: 10
  },
    container: {
    flex: 1,
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: '#047884'
  },
  button: {
    backgroundColor: "#F5F5EF",
    padding: 10,
    borderRadius: 5,
    borderRadius: 40,
    borderColor: "#303838",
    borderWidth: 1,
    margin: 4,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#303838",
    fontWeight: "bold",
    fontSize: 20,
  }
});

class Homepage extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          style={{width: 200, height: 200}}
          source={require('./src/image/logo.png')}
        />
        <Text style={styles.title}>RT Jobs</Text>
        <View style={[styles.button]}>
          <TouchableOpacity onPress={() => navigate("BusinessLogin", { name: "Business" })}>
            <Text style={styles.text}>
              Business
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigate("ApplicantLogin", { name: "Applicant" })}>
            <Text style={styles.text}>Applicant</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Homepage;
