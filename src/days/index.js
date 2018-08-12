import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import Day from './day';
import './days.css';

const Days = ({ date, reminders }) => {

  const currentDate = date,
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

  const monthsReminders = reminders[year] ? reminders[year][month] : null;

  return (
    <div className="days">
      {days.map((day, idx) => {
        return <Day key={idx} dayNumber={day} reminders={monthsReminders ? monthsReminders[day] : null} />
      })}
    </div>
  )

}

const mapStateToProps = state => ({
  date: state.selectedDate,
  reminders: state.reminders
});

export default connect(mapStateToProps)(Days);