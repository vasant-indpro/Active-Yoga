import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PoseList from './src/components/PoseList/PoseList';
import yogaImage from './src/assets/yoga.png'

export default class App extends React.Component {

  poses = [{
    key: "1",
    poseName: "Pose 1",
    poseImage: yogaImage
  },
  {
    key: "2",
    poseName: "Pose 2",
    poseImage: yogaImage
  }];

  posePressedHandler = key => {
    alert(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Poses</Text>
        <PoseList poses={this.poses} onItemPressed={this.posePressedHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 40,
  },
});

