import { combineReducers } from 'redux';

import menu from './menu';
import app from './app';

export default combineReducers({
  menu,
  app
});
