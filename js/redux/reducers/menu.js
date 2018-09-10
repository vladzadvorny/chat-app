import {
  CHANGE_SEX,
  CHANGE_AGE,
  CHANGE_FINDSEX,
  CHANGE_FINDAGE
} from '../actions';

const initialState = {
  sex: 'male', // ['male', 'female']
  age: '18-21', // ['<18', '18-21', '22-25', '26-35', '=>36']
  findSex: 'female', // ['male', 'female']
  findAge: ['18-21', '22-25'] // ['<18', '18-21', '22-25', '26-35', '=>36']
};

const onChangeFindAge = (state, payload) => {
  const { findAge } = state;

  if (payload === 'unknown') {
    return Object.assign({}, state, { findAge: ['unknown'] });
  }

  const clone = [...findAge];

  // find and remove unknown
  const unknownIndex = findAge.indexOf('unknown');
  if (unknownIndex !== -1) {
    clone.splice(unknownIndex, 1);
  }

  // find and disable element
  const index = findAge.indexOf(payload);
  if (index !== -1) {
    clone.splice(index, 1);

    return Object.assign({}, state, {
      findAge: !clone.length ? ['unknown'] : clone
    });
  }

  return Object.assign({}, state, { findAge: [...clone, payload] });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEX:
      return Object.assign({}, state, { sex: action.payload });

    case CHANGE_AGE:
      return Object.assign({}, state, { age: action.payload });

    case CHANGE_FINDSEX:
      return Object.assign({}, state, { findSex: action.payload });

    case CHANGE_FINDAGE:
      return onChangeFindAge(state, action.payload);

    default:
      return state;
  }
};
