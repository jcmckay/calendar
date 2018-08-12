const reminder = (state = null, action) => {

  switch(action.type) {
    case 'SET_REMINDER_FOCUS':
      return action.reminder;
    default:
      return state;
  }

}

export default reminder;