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
  static navigationOptions = {
    title: "RT Jobs"
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
            return <BusinessJobListCard {...job}> </BusinessJobListCard>;
          })}
        </ScrollView>
      </View>
    );
  }
  componentDidMount() {
    api
      .getJobsByBusinessId(this.props.navigation.state.params.localId)
      .then(businessJobList => {
        this.setState({ businessJobList });
      });
  }
}
export default BusinessJobList;
