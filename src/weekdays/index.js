import React from 'react';
import moment from 'moment';
import './weekdays.css';

const Weekdays = () => {
  const weekdays = moment.weekdays();

  return (
    <header className="weekdays">
      { weekdays.map((weekday, idx) => <div key={idx} className="weekday">{weekday}</div>) }
    </header>
  )
}

export default Weekdays;