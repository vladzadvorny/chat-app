import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  ActivityIndicator,
  StyleSheet
} from 'react-native';
import { Provider } from 'react-redux';

import store from './redux/store';
import images from './constants/images';

import Header from './components/Header';
import Sounds from './components/Sounds';
import Navigation from './screens';

export default class App extends Component {
  state = {
    isReady: true
  };

  // componentDidMount() {
  //   this.cacheAssets();
  // }

  // cacheAssets = async () => {
  //   const imagesAssets = cacheImages(Object.values(images));

  //   await Promise.all([...imagesAssets]);

  //   this.setState({ isReady: true });
  // };

  render() {
    const { isReady } = this.state;

    if (!isReady) {
      return (
        <View style={styles.indicator}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <Provider store={store}>
        <View style={styles.main}>
          <ImageBackground source={images.bg} style={styles.background}>
            <Header />
            <Navigation />
          </ImageBackground>
          <Sounds />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  main: {
    flex: 1
  },
  background: {
    width: '100%',
    height: '100%'
  }
});
