import { combineReducers } from 'redux';

import menu from './menu';
import app from './app';
import ws from './ws';

export default combineReducers({
  menu,
  app,
  ws
});
