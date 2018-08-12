const selectedDate = (state = 0, action) => {
  switch (action.type) {
    case 'SET_DATE':
      return action.value;
    default:
      return state;
  }
};

export default selectedDate;