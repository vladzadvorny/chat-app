import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Lightbox from 'react-native-lightbox';

const LightBoxHeader = ({ close }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={close}>
      <Text style={styles.closeButton}>×</Text>
    </TouchableOpacity>
  </View>
);

const activeProps = {
  resizeMode: 'contain',
  flex: 1,
  width: null
};

export default ({ source, style, ...others }) => (
  <Lightbox
    activeProps={activeProps}
    renderHeader={close => <LightBoxHeader close={close} {...others} />}
  >
    <Image style={style} source={source} resizeMode="cover" />
  </Lightbox>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  closeButton: {
    fontSize: 35,
    color: 'white',
    lineHeight: 40,
    width: 40,
    textAlign: 'center',
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 1.5,
    shadowColor: 'black',
    shadowOpacity: 0.8
  }
});
