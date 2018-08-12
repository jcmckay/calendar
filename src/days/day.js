import React from 'react';
import Reminder from '../reminder';

const Day = ({ dayNumber, reminders }) => {
  const disabled = dayNumber === 0 ? 'disabled' : '';

  return (
    <div className={`day ${disabled}`}>
      <span>{dayNumber !== 0 ? dayNumber : ''}</span>
      { reminders ? reminders.map((r) => <Reminder key={r.id} reminder={r} />) : null}
    </div>
  )
}

export default Day;