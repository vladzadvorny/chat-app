import React, { Component } from 'react';
import { View, ImageBackground, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';

import store from './redux/store';
import images from './constants/images';

import Header from './components/Header';
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
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <Provider store={store}>
        <View
          style={{
            flex: 1
          }}
        >
          <ImageBackground
            source={images.bg}
            style={{ width: '100%', height: '100%' }}
          >
            <Header />
            <Navigation />
          </ImageBackground>
        </View>
      </Provider>
    );
  }
}
