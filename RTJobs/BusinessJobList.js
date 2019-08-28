import React from "react";
import {
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import * as api from "./api";
import BusinessJobListCard from "./BusinessJobListCard";

class BusinessJobList extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerTitle: "My jobs",
      headerRight: (
        <TouchableOpacity
          onPress={() => params.handleThis()}
          style={{
            marginRight: 10,
            padding: 10,
            borderColor: "#047b84",
            borderWidth: 2,
            borderRadius: 40
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 15, color: "#303838" }}>
            Post Job
          </Text>
        </TouchableOpacity>
      )
    };
  };
  state = {
    businessJobList: []
  };
  render() {
    const { businessJobList } = this.state;
    const { navigate } = this.props.navigation;

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() =>
            navigate("BusinessPostJob", {
              name: "BusinessPostJob",
              businessId: this.props.navigation.state.params.localId
            })
          }
        >
          <Text>Post Job</Text>
        </TouchableOpacity>
        <ScrollView>
          {businessJobList.map(job => {
            return (
              <BusinessJobListCard {...job} navigation={this.props.navigation}>
                {" "}
              </BusinessJobListCard>
            );
          })}
        </ScrollView>
      </View>
    );
  }
  componentDidMount() {
    this.props.navigation.setParams({
      handleThis: this.changeButton
    });
    api
      .getJobsByBusinessId(this.props.navigation.state.params.localId)
      .then(businessJobList => {
        this.setState({ businessJobList });
      });
  }
  changeButton = () => {
    this.props.navigation.navigate("BusinessPostJob", {
      name: "BusinessPostJob",
      businessId: this.props.navigation.state.params.localId
    });
  };
}
export default BusinessJobList;
