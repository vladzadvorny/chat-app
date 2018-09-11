import { START_CHAT, STOP_CHAT, TOGGLE_MUTE } from '../actions';

const initialState = {
  startChat: false, // or chat,
  mute: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_CHAT:
      return Object.assign({}, state, {
        startChat: true
      });

    case STOP_CHAT:
      return Object.assign({}, state, {
        startChat: false
      });

    case TOGGLE_MUTE:
      return Object.assign({}, state, {
        mute: !state.mute
      });

    default:
      return state;
  }
};
