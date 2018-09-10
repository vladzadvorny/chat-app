import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { freeSpace } from '../constants/theme';

class Header extends Component {
  state = {};

  render() {
    return (
      <View
        style={{
          height: 60,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          paddingStart: freeSpace,
          paddingEnd: freeSpace,
          elevation: 2
        }}
      >
        <Text>Headerfff</Text>
      </View>
    );
  }
}

export default Header;
