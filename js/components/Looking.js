import React, { Component } from 'react';
import { connect } from 'react-redux';
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
import { stopChat } from '../redux/actions';

class Looking extends Component {
  render() {
    /* eslint-disable no-shadow */
    const { counts, stopChat } = this.props;
    /* eslint-enable */

    return (
      <View style={styles.main}>
        <View style={styles.box}>
          <Text style={styles.header}>Поиск собеседника</Text>
          <ActivityIndicator style={styles.loader} size="large" />
          <View style={styles.stats}>
            <Text>Сейчас общаются: {!counts[0] ? '∞' : counts[0]}</Text>
            <Text>В поиске: {!counts[1] ? '∞' : counts[1]}</Text>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={() => stopChat()}
              style={styles.touchable}
            >
              <Text style={{ color: whiteColor, fontSize: 16 }}>Отмена</Text>
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
    height: 34,
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

// eslint-disable-next-line
const mapStateToProps = state => ({
  counts: state.ws.counts
});

const mapDispatchToProps = {
  stopChat
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Looking);
