import Slider from '@react-native-community/slider';
import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import * as api from './api';

export default class Rater extends Component {
  state = {
    skills: [{ skill: 'Must be able to make cocktails', rating: 0 }, { skill: 'Must own appropriate attire', rating: 0 }, { skill: 'Must like dogs', rating: 0 }],
    currentQ: 0
  }

  render() {
    const { height, width } = Dimensions.get('window');
    const { skills, currentQ } = this.state;
    return (
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', borderRadius: 50}}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: 'center', backgroundColor: 'white' }}>
          <TouchableOpacity onPress={() => { this.changeQ(-1) }} style={{ backgroundColor: '#047b84', padding: 20}}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>{'<'}</Text>
          </TouchableOpacity>
          <View style={{ flex: 1, flexDirection: "column", alignItems: 'center' }}>
            <Text style={{ color: '#047b84', fontSize: 17 }}>{skills[currentQ].skill}</Text>
            <Slider
              style={{ width: 200, height: 40 }}
              minimumValue={0}
              maximumValue={5}
              step={1}
              value={skills[currentQ].rating}
              minimumTrackTintColor="gray"
              maximumTrackTintColor="gray"
              onValueChange={(val) => { this.updateRating(val) }}
            />
          </View>
          <TouchableOpacity onPress={() => { this.changeQ(1) }} style={{ backgroundColor: '#047b84', padding: 20 }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>{'>'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  updateRating = (val) => {
    this.setState(currState => {
      currState.skills[currState.currentQ].rating = val;
      return { skills: currState.skills };
    }, () => {
      const averageScore = this.state.skills.reduce((acc, cur) => acc += cur.rating / 3, 0).toFixed(2);
      api.patchApplicationScore(this.props.id, averageScore).catch(err => {console.log(err)});
    })
  }

  changeQ = (val) => {
    this.setState(currState => {
      return { currentQ: (currState.currentQ + val + currState.skills.length) % (currState.skills.length) }
    })
  }

}