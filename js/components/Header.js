import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  freeSpace,
  fontSize,
  whiteColor,
  blackColor,
  primaryColor
} from '../constants/theme';
import { toggleMute } from '../redux/actions';

const iconSize = 28;

class Header extends Component {
  state = {};

  render() {
    /* eslint-disable no-shadow */
    const { mute, toggleMuteAction } = this.props;
    /* eslint-enable */

    return (
      <View style={styles.main}>
        <View>
          <Text
            style={{
              fontSize: 22,
              color: blackColor
            }}
          >
            Анонимный чат
          </Text>
        </View>

        {/* 
        <Icon name="volume-up" size={30} color="#900" />
        <Icon name="volume-off" size={30} color="#900" /> 
        <Icon name="sign-out" size={30} color={primaryColor} />
        */}
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => toggleMuteAction()}
            style={{ width: 30 }}
          >
            {!mute ? (
              <Icon name="volume-up" size={iconSize} color={primaryColor} />
            ) : (
              <Icon name="volume-off" size={iconSize} color={primaryColor} />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: freeSpace * 1.5 }}>
            <Icon name="sign-out" size={iconSize} color={primaryColor} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    height: 64,
    backgroundColor: whiteColor,
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: freeSpace * 1.5,
    paddingEnd: freeSpace * 1.5,
    elevation: 2,
    justifyContent: 'space-between'
  },
  buttons: {
    flexDirection: 'row',
    paddingEnd: 1
  }
});

const mapStateToProps = state => ({
  mute: state.app.mute
});

const mapDispatchToProps = {
  toggleMuteAction: toggleMute
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
