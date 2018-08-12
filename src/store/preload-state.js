import moment from 'moment';
import uuid from 'uuid';

const selectedDate = moment();
const reminders = {
  2018: {
    7: {
      8: [{
        id: uuid(),
        text: 'Something to Remind me about',
        color: 'green',
        date: moment('2018-08-08T21:50:49.681Z')
      }]
    }
  }
}

export const PreloadedState = {
  selectedDate: selectedDate,
  reminders: reminders
};