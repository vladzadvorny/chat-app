import React, { Component } from 'react';
import { View } from 'react-native';

import Menu from '../components/Menu';

import { freeSpace } from '../constants/theme';

class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          padding: freeSpace
        }}
      >
        <Menu />
      </View>
    );
  }
}

export default HomeScreen;
