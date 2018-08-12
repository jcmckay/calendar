import moment from 'moment';
import uuid from 'uuid';

const deleteReminders = (state, reminder) => {
  const newState = {...state},
        date = moment(reminder.date),
        year = date.year(),
        month = date.month(),
        day = date.date();

  newState[year][month][day] = newState[year][month][day].filter((d) => d.id !== reminder.id);

  return {...newState};
}

const createReminder = (state, reminder) => {
  const date = moment(reminder.date),
        year = date.year(),
        month = date.month(),
        day = date.date();

  let newState = { ...state };
  if(!newState[year]) {
    newState[year] = {};
  }

  if(!newState[year][month]) {
    newState[year][month] = {};
  }

  if(!newState[year][month][day]) {
    newState[year][month][day] = [];
  }

  const newReminder = {id: uuid(), text: reminder.text, color: reminder.color, date: reminder.date };
  newState[year][month][day].push(newReminder);

  return {...newState};
}

const reminders = (state = {}, action) => {

  switch(action.type) {
    case 'CREATE_REMINDER':
      return createReminder(state, action.reminder);
    case 'DELETE_REMINDER':
      return deleteReminders(state, action.reminder);
    default:
      return state;
  }
}

export default reminders;