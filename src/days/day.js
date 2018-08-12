import React from 'react';

const Day = ({ dayNumber, reminders }) => {
  const disabled = dayNumber === 0 ? 'disabled' : '';


  return (
    <div className={`day ${disabled}`}>
      <span>{dayNumber !== 0 ? dayNumber : ''}</span>
      { reminders ? reminders.map((r, idx) => <div key={idx} className="reminder" style={ {backgroundColor: r.color}} >{r.text}</div>) : null}
    </div>
  )
}

export default Day;