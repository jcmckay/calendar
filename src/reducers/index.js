import { combineReducers } from 'redux';
import selectedDate from './selected-date';
import reminders from './reminders';

export default combineReducers({
  selectedDate,
  reminders
});