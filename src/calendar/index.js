import React, { Component } from 'react';
import Header from '../header';
import Weekdays from '../weekdays';
import Days from '../days';
import './calendar.css';

class Calendar extends Component {
  render() {

    return (
      <div className="calendar">
          <Header />
          <Weekdays />
          <Days />
      </div>
    );
  }
}

export default Calendar;