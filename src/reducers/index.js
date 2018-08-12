import { combineReducers } from 'redux';
import selectedDate from './selected-date';
import reminders from './reminders';
import reminder from './reminder';
import showReminderForm from './show-reminder-form';

export default combineReducers({
  selectedDate,
  reminders,
  reminder,
  showReminderForm
});