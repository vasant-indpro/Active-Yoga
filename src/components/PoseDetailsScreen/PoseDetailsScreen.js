import React from 'react';
import { Text, View } from 'react-native';

export default class PoseDetailsScreen extends React.Component {

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