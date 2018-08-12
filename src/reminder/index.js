import React from 'react';
import { connect } from 'react-redux';

const Reminder = ({ reminder, dispatch }) => {
  return (
    <div
      key={reminder.id}
      className="reminder"
      style={ {backgroundColor: reminder.color} }>
      <span>{reminder.text}</span>
      <button
        type="button"
        onClick={() => dispatch({type: 'DELETE_REMINDER', reminder: { id: reminder.id, date: reminder.date }})}>X</button>
    </div>
  )
}

export default connect()(Reminder);