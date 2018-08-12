import moment from 'moment';

const reminders = (state = {}, action) => {

  switch(action.type) {
    case 'CREATE_REMINDER':
      const reminder = action.reminder,
            date = moment(reminder.date),
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

      const newReminder = {text: reminder.text, color: reminder.color, datetime: reminder.date };
      newState[year][month][day].push(newReminder);

      return {...newState};
    default:
      return state;
  }
}

export default reminders;