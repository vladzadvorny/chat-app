// menu
export const CHANGE_SEX = 'CHANGE_SEX';
export const CHANGE_AGE = 'CHANGE_AGE';
export const CHANGE_FINDSEX = 'CHANGE_FINDSEX';
export const CHANGE_FINDAGE = 'CHANGE_FINDAGE';

export const changeSex = payload => ({
  type: CHANGE_SEX,
  payload
});
export const changeAge = payload => ({
  type: CHANGE_AGE,
  payload
});
export const changeFindSex = payload => ({
  type: CHANGE_FINDSEX,
  payload
});
export const changeFindAge = payload => ({
  type: CHANGE_FINDAGE,
  payload
});

// app
export const START_CHAT = 'START_CHAT';
export const startChat = () => ({
  type: START_CHAT
});

export const STOP_CHAT = 'STOP_CHAT';
export const stopChat = () => ({
  type: STOP_CHAT
});

export const TOGGLE_MUTE = 'TOGGLE_MUTE';
export const toggleMute = () => ({
  type: TOGGLE_MUTE
});
