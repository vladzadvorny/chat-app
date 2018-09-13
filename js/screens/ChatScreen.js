import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Keyboard } from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { primaryColor, whiteColor, freeSpace } from '../constants/theme';

const iconSize = 27;

class ChatScreen extends Component {
  state = {
    body: '',
    picker: false,
    selectionStart: 0,
    selectionEnd: 0
  };

  onChange(e) {
    const { text } = e.nativeEvent;
    this.setState({ body: text || '' });
  }

  addEmoji(emoji) {
    const { value } = this.textInput.props;
    console.log(value);
    const { selectionStart, selectionEnd } = this.state;
    const textareaStrParts = [
      `${value.substring(0, selectionStart)}`,
      `${emoji}`,
      `${value.substring(selectionEnd, this.length)}`
    ];

    this.setState({
      body: textareaStrParts.join(''),
      picker: false
    });
  }

  render() {
    const { body, picker } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text>Chat Screen</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: whiteColor
          }}
        >
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: freeSpace,
              paddingRight: 5
            }}
          >
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
                this.setState({ picker: !picker });
              }}
            >
              <Icon name="smile" size={iconSize} color={primaryColor} />
            </TouchableOpacity>
          </View>

          <AutoGrowingTextInput
            value={body}
            onChange={e => this.onChange(e)}
            style={{
              paddingLeft: 10,
              fontSize: 17,
              flex: 1,
              backgroundColor: 'white',
              borderWidth: 0
            }}
            placeholder="Твоё сообщение..."
            placeholderTextColor="#66737C"
            maxHeight={200}
            minHeight={45}
            enableScrollToCaret
            onTouchStart={() => this.setState({ picker: false })}
            onSelectionChange={e =>
              this.setState({
                selectionStart: e.nativeEvent.selection.start,
                selectionEnd: e.nativeEvent.selection.end
              })
            }
            ref={r => {
              this.textInput = r;
            }}
          />

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 5,
              paddingRight: freeSpace
            }}
          >
            {body ? (
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss();
                  this.setState({ picker: !picker });
                }}
              >
                <Icon
                  name="greater-than"
                  size={iconSize - 2}
                  color={primaryColor}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss();
                  this.setState({ picker: !picker });
                }}
              >
                <Icon name="camera" size={iconSize} color={primaryColor} />
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View
          style={{
            // height: '40%',
            backgroundColor: whiteColor,
            height: picker ? '40%' : 1
          }}
        >
          <EmojiSelector
            category={Categories.people}
            onEmojiSelected={emoji => this.addEmoji(emoji)}
            columns={6}
            showSearchBar={false}
            showTabs={false}
            theme={primaryColor}
          />
        </View>
      </View>
    );
  }
}

export default ChatScreen;
