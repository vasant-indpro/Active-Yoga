import React from 'react';
import { StyleSheet, View } from 'react-native';

import PoseList from '../PoseList/PoseList';

export default class PoseScreen extends React.Component {

    static navigationOptions = {
      title: 'Pose',
    };
  
    poses = [{
        key: "1",
        poseName: "Pose",
        poseImage: require('../PoseScreen/assets/yoga_1.png')
      },
      {
        key: "2",
        poseName: "Pose",
        poseImage: require('../PoseScreen/assets/yoga_2.png')
      },
      {
        key: "3",
        poseName: "Pose",
        poseImage: require('../PoseScreen/assets/yoga_3.png')
      },
      {
        key: "4",
        poseName: "Pose",
        poseImage: require('../PoseScreen/assets/yoga_4.png')
      },
      {
        key: "5",
        poseName: "Pose",
        poseImage: require('../PoseScreen/assets/yoga_5.png')
      },
      {
        key: "6",
        poseName: "Pose",
        poseImage: require('../PoseScreen/assets/yoga_6.png')
      },
      {
        key: "7",
        poseName: "Pose",
        poseImage: require('../PoseScreen/assets/yoga_7.png')
      },
      {
        key: "8",
        poseName: "Pose",
        poseImage: require('../PoseScreen/assets/yoga_8.png')
      },
      {
        key: "9",
        poseName: "Pose",
        poseImage: require('../PoseScreen/assets/yoga_9.png')
      },
      {
        key: "10",
        poseName: "Pose",
        poseImage: require('../PoseScreen/assets/yoga_10.png')
      },
      {
        key: "11",
        poseName: "Pose",
        poseImage: require('../PoseScreen/assets/yoga_11.png')
      },
      {
        key: "12",
        poseName: "Pose",
        poseImage: require('../PoseScreen/assets/yoga_12.png')
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