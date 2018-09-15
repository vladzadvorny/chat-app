import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

import { primaryColor } from '../constants/theme';
import { MESSAGE } from '../constants/wsTypes';
import { apiUrl } from '../constants/config';

class PhotoUpload extends Component {
  state = {
    originUri: null
  };

  uploadPicture = async formData => {
    const { websocket } = this.props;
    try {
      const { data } = await axios.post(`${apiUrl}/upload`, formData);
      if (data.error) {
        Alert.alert(data.error);
      } else {
        websocket.send(
          JSON.stringify({
            payload: {
              img: `${apiUrl}/uploads/${data.filePath}`
            },
            type: MESSAGE
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  openImagePicker() {
    const { originUri } = this.state;
    const { chatId } = this.props;

    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    // get image from image picker
    ImagePicker.showImagePicker(options, async response => {
      // this.setState({
      //   originUri: response.uri
      // });
      const { uri } = response;
      console.log('response', response.uri);

      if (response.didCancel) {
        console.log('User cancelled image picker');
        return;
      }

      if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        return;
      }

      // if (response.customButton) {
      //   console.log('User tapped custom button: ', response.customButton);
      //   return;
      // }

      // Post the photo with position which it was selected
      const formData = new FormData();
      // data.append('authToken', 'secret');
      // photo.append('photo', {
      //   uri: originUri,
      //   type: 'image/jpeg',
      //   name: 'photo.jpg'
      // });

      // Resize and post the thumb
      console.log('uri', originUri);
      const hello = await ImageResizer.createResizedImage(
        uri,
        800, // height
        600, // width
        'JPEG', // format
        80 // quality
      ).then(({ uri }) => {
        formData.append('chatId', chatId);
        formData.append('file', {
          uri,
          type: 'image/jpeg',
          name: 'photo.jpg'
        });

        this.uploadPicture(formData);
      });
    });
  }

  render() {
    const { iconSize } = this.props;

    return (
      <TouchableOpacity onPress={() => this.openImagePicker()}>
        <Icon name="camera" size={iconSize} color={primaryColor} />
      </TouchableOpacity>
    );
  }
}

const mapStateToProps = state => ({
  chatId: state.ws.chatId
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUpload);
