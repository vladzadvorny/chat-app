import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer'; // eslint-disable-line
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

import { primaryColor, freeSpace } from '../constants/theme';
import { MESSAGE } from '../constants/wsTypes';
import { apiUrl } from '../constants/config';

class PhotoUpload extends Component {
  state = {
    loading: false
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
              img: `uploads/${data.filePath}`
            },
            type: MESSAGE
          })
        );
        setTimeout(() => {
          this.setState({
            loading: false
          });
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  openImagePicker() {
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
      const { uri } = response;

      this.setState({
        loading: true
      });

      if (response.didCancel) {
        console.log('User cancelled image picker');
        this.setState({
          loading: false
        });
        return;
      }

      if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        Alert.alert('Ошибка! Попробуй ещё раз.');
        this.setState({
          loading: false
        });
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

      const result = await ImageResizer.createResizedImage(
        uri,
        800, // height
        600, // width
        'JPEG', // format
        80 // quality
      );
      // .then(({ uri }) => {
      formData.append('chatId', chatId);
      formData.append('file', {
        uri: result.uri,
        type: 'image/jpeg',
        name: 'photo.jpg'
      });

      this.uploadPicture(formData);
      // });
    });
  }

  render() {
    const { iconSize } = this.props;
    const { loading } = this.state;

    return (
      <Fragment>
        {!loading ? (
          <TouchableOpacity
            style={{ padding: freeSpace }}
            onPress={() => this.openImagePicker()}
          >
            <Icon name="camera" size={iconSize} color={primaryColor} />
          </TouchableOpacity>
        ) : (
          <ActivityIndicator style={{ padding: freeSpace }} size="small" />
        )}
      </Fragment>
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
