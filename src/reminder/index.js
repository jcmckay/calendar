import React from 'react';
import { connect } from 'react-redux';

const Reminder = ({ reminder, dispatch }) => {
  return (
    <div
      key={reminder.id}
      className="reminder"
      style={ {backgroundColor: reminder.color} }
      >
      <span onClick={() => {
        dispatch({type: 'SET_REMINDER_FOCUS', reminder: reminder });
        dispatch({type: 'SHOW_REMINDER_FORM' });
      }}>{reminder.text}</span>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: 'DELETE_REMINDER', reminder: { id: reminder.id, date: reminder.date }})
          dispatch({ type: 'CLEAR_REMINDER_FOCUS' })
        }}>X</button>
    </div>
  )
}

export default connect()(Reminder);