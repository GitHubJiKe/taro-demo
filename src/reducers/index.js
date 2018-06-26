import { combineReducers } from 'redux';
import click from './click';
import loading from './loading';

export default combineReducers({
  click,
  loading
});