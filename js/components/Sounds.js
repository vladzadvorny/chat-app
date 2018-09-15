import { Component } from 'react';
import { connect } from 'react-redux';
import SoundPlayer from 'react-native-sound-player';

class Sounds extends Component {
  state = {};

  componentWillReceiveProps(nextProps) {
    // eslint-disable-next-line no-shadow
    const { start, messages, mute } = this.props;

    if (!mute && nextProps.start && !start) {
      try {
        // play the file tone.mp3
        SoundPlayer.playSoundFile('start', 'mp3');
      } catch (e) {
        console.log(`cannot play the sound file`, e);
      }
    }

    if (!mute && nextProps.messages.length > messages.length) {
      console.log(nextProps.messages.length, messages.length);
      const first = nextProps.messages[0];

      if (!first.my) {
        try {
          // play the file tone.mp3
          SoundPlayer.playSoundFile('message', 'mp3');
        } catch (e) {
          console.log(`cannot play the sound file`, e);
        }
      }
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  start: state.ws.start,
  messages: state.ws.messages,
  mute: state.app.mute
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sounds);
