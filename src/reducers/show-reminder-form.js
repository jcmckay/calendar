const showReminderForm = (state = false, action) => {
  switch(action.type) {
    case 'HIDE_REMINDER_FORM':
      return false;
    case 'SHOW_REMINDER_FORM':
      return true;
    default:
      return state;
  }
}

export default showReminderForm;