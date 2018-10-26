import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import PoseList from './src/components/PoseList/PoseList';

class PoseScreen extends React.Component {

  static navigationOptions = {
    title: 'Pose',
  };

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

    selectedPose = this.poses.filter(pose => {
      return pose.key === key;
    })
    this.props.navigation.navigate('Details', { pose: selectedPose[0].poseName + " " + key + " details is not available." });
  };

  render() {
    return (
      <View style={styles.container}>
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
  },
});

class PoseDetailsScreen extends React.Component {

  static navigationOptions = {
    title: 'Pose Details',
  };

  render() {

    const { navigation } = this.props;
    const item = navigation.state.params.pose;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{item}</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Pose: PoseScreen,
    Details: PoseDetailsScreen,
  },
  {
    initialRouteName: 'Pose',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}