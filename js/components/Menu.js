import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { freeSpace } from '../constants/theme';

class Menu extends Component {
  state = {};

  render() {
    return (
      <View
        style={{
          backgroundColor: 'green',
          flexDirection: 'row',
          alignItems: 'center',
          padding: freeSpace,
          width: '100%'
        }}
      >
        <View
          style={{
            elevation: 2,
            width: '100%'
          }}
        >
          <Text>menu</Text>
        </View>
      </View>
    );
  }
}

export default Menu;
