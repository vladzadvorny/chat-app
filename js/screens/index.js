import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Chat: ChatScreen
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      header: null
    },
    cardStyle: {
      backgroundColor: 'transparent'
    },
    transitionConfig: () => ({
      containerStyle: {
        backgroundColor: 'transparent'
      }
    })
  }
);

class Navigation extends Component {
  render() {
    return <AppNavigator />;
  }
}

export default Navigation;
