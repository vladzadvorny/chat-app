import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import Menu from '../components/Menu';

import { freeSpace } from '../constants/theme';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.main}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
          showsVerticalScrollIndicator={false}
        >
          <Menu />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: freeSpace
  }
});

export default HomeScreen;
