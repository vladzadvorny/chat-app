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
