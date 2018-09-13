import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';

import {
  freeSpace,
  whiteColor,
  fontSize,
  primaryColor
} from '../constants/theme';

class Looking extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.box}>
          <Text style={styles.header}>Поиск собеседника</Text>
          <ActivityIndicator style={styles.loader} size="large" />
          <View style={styles.stats}>
            <Text>Сейчас общаются:</Text>
            <Text>В поиске:</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity style={styles.touchable}>
              <Text style={{ color: whiteColor, fontSize: fontSize.md }}>
                Отмена
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: freeSpace
  },
  box: {
    backgroundColor: whiteColor,
    padding: freeSpace,
    minWidth: '50%'
  },
  header: {
    fontSize: fontSize.lg,
    marginBottom: freeSpace * 2
  },
  loader: {
    marginBottom: freeSpace * 2
  },
  stats: {
    marginBottom: freeSpace * 2
  },
  button: {
    backgroundColor: primaryColor,
    height: 40,
    elevation: 2
  },
  touchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingRight: freeSpace,
    paddingLeft: freeSpace
  }
});

export default Looking;
