import React from 'react';
import { createStackNavigator } from 'react-navigation';

import PoseScreen from './src/components/PoseScreen/PoseScreen';
import PoseDetailsScreen from './src/components/PoseDetailsScreen/PoseDetailsScreen';

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