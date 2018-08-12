import React from 'react';

const Reminder = ({ reminder }) => {
  return (
    <div
      key={reminder.id}
      className="reminder"
      style={ {backgroundColor: reminder.color} }>
      <span>{reminder.text}</span>
    </div>
  )
}

export default Reminder;