import React from 'react';
import moment from 'moment';
import './days.css';

const Days = () => {

  const currentDate = moment(),
        year = currentDate.year(),
        month = currentDate.month(),
        daysInTheMonth = currentDate.daysInMonth();

  const startDayOfWeek = moment(moment([year, month])).day();
  let days = Array(startDayOfWeek).fill(0);
  for(var i = 1; i <= daysInTheMonth; i++) {
    days.push(i);
  }

  const endDayofWeek = moment(moment([year, month, daysInTheMonth])).day();
  const endFill = Array(6-endDayofWeek).fill(0);

  days = days.concat(endFill);

  return (
    <div className="days">
      {days.map((day, idx) => {
        const disabled = day === 0 ? 'disabled' : '';
        return <div key={idx} className={`day ${disabled}`}>{day !== 0 ? day : ''}</div>})}
    </div>
  )

}

export default Days;