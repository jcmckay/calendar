import React, { Component } from 'react';
import Weekdays from '../weekdays';
import Days from '../days';
import './calendar.css';

class Calendar extends Component {
  render() {

    return (
      <div className="calendar">
          <Weekdays />
          <Days />
      </div>
    );
  }
}

export default Calendar;