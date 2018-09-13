import React, { Component } from 'react';
import { View } from 'react-native';

import Messages from '../components/Messages';
import Looking from '../components/Looking';

class ChatScreen extends Component {
  state = {};

  render() {
    return (
      <View style={{ flex: 1 }}>
        {/* <Messages /> */}
        <Looking />
      </View>
    );
  }
}

export default ChatScreen;
