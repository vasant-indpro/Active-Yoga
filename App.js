import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PoseList from './src/components/PoseList/PoseList';
import yogaImage from './src/assets/yoga_2.png'

export default class App extends React.Component {

  poses = [{
    key: "1",
    poseName: "Pose",
    poseImage: require('./src/assets/yoga_1.png')
  },
  {
    key: "2",
    poseName: "Pose",
    poseImage: require('./src/assets/yoga_2.png')
  },
  {
    key: "3",
    poseName: "Pose",
    poseImage: require('./src/assets/yoga_3.png')
  },
  {
    key: "4",
    poseName: "Pose",
    poseImage: require('./src/assets/yoga_4.png')
  },
  {
    key: "5",
    poseName: "Pose",
    poseImage: require('./src/assets/yoga_5.png')
  },
  {
    key: "6",
    poseName: "Pose",
    poseImage: require('./src/assets/yoga_6.png')
  },
  {
    key: "7",
    poseName: "Pose",
    poseImage: require('./src/assets/yoga_7.png')
  },
  {
    key: "8",
    poseName: "Pose",
    poseImage: require('./src/assets/yoga_8.png')
  },
  {
    key: "9",
    poseName: "Pose",
    poseImage: require('./src/assets/yoga_9.png')
  },
  {
    key: "10",
    poseName: "Pose",
    poseImage: require('./src/assets/yoga_10.png')
  },
  {
    key: "11",
    poseName: "Pose",
    poseImage: require('./src/assets/yoga_11.png')
  },
  {
    key: "12",
    poseName: "Pose",
    poseImage: require('./src/assets/yoga_12.png')
  }];

  posePressedHandler = key => {

    selectedItem = this.poses.filter(pose => {
      return pose.key === key;
    })

    alert(selectedItem[0].poseName + " " + key + " details is not available.");
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

