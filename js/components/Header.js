import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { freeSpace, fontSize } from '../constants/theme';

class Header extends Component {
  state = {};

  render() {
    return (
      <View
        style={{
          height: 64,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
          paddingStart: freeSpace,
          paddingEnd: freeSpace,
          elevation: 2,
          justifyContent: 'center'
        }}
      >
        <Text
          style={{
            fontSize: fontSize.lg
          }}
        >
          Анонимный чат
        </Text>
      </View>
    );
  }
}

export default Header;
