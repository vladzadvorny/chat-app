import React, { Component, Fragment } from 'react';
// import { connect } from 'redux';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Keyboard,
  StyleSheet
} from 'react-native';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { primaryColor, whiteColor, freeSpace } from '../constants/theme';

const iconSize = 27;

class Messages extends Component {
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
      <Fragment>
        {/* messages */}
        <View style={styles.messages}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.message}>
              <View style={styles.bubble}>
                <Text style={{ width: '80%' }}>
                  Не забывай меня, ради христа, я тебя люблю в миллион раз
                  больше, чем все остальные, взятые вместе.
                </Text>

                <Text style={{ width: '20%', textAlign: 'right' }}>
                  9:08 AM
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* info box */}
        <View style={styles.info}>
          <Text style={{ color: whiteColor }}>
            Собеседник набирает сообщение...
          </Text>
        </View>

        {/* write box */}
        <View style={styles.write}>
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
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  // messages
  messages: {
    flex: 1
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-end'
  },
  message: {
    backgroundColor: 'grey',
    flexDirection: 'row',
    paddingLeft: 5,
    paddingRight: 5
  },
  bubble: {
    backgroundColor: whiteColor,
    padding: 7,
    minWidth: 100,
    maxWidth: '80%',
    borderRadius: 4,
    borderBottomLeftRadius: 0,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 12
  },

  // info
  info: {
    alignItems: 'center',
    padding: 2
  },

  // write
  write: {
    flexDirection: 'row',
    backgroundColor: whiteColor,
    paddingBottom: 3,
    paddingTop: 3
  }
});

// export default connect(
//   null,
//   null
// )(Messages);

export default Messages;
