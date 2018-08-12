const reminder = (state = null, action) => {

  switch(action.type) {
    case 'SET_REMINDER_FOCUS':
      return action.reminder;
    case 'CLEAR_REMINDER_FOCUS':
      return null;
    default:
      return state;
  }

}

export default reminder;