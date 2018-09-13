import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, ScrollView } from 'react-native';

import Menu from '../components/Menu';

import { freeSpace } from '../constants/theme';

class HomeScreen extends Component {
  componentWillReceiveProps(nextProps) {
    const { startChat, navigation } = this.props;
    if (nextProps.startChat && !startChat) {
      navigation.navigate('Chat');
    }
  }

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

const mapStateToProps = state => ({
  startChat: state.app.startChat
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
