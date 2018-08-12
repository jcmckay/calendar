import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import './header.css';

const Header = ( { date, dispatch } ) => {

  const prevMonth = moment(date).subtract(1, "month"),
        nextMonth = moment(date).add(1, "month");

  return (
    <header>
      <nav className="month-nav">
        <div className="previous-month">
          <a href="#" onClick={() => {dispatch({type: 'SET_DATE', value: prevMonth})}}>{prevMonth.format('MMM')}</a>
        </div>
        <div className="current-month">
          { `${moment(date).format('MMMM')} ${moment(date).year()}` }
        </div>
        <div className="next-month">
          <a href="#" onClick={() => {dispatch({type: 'SET_DATE', value:  nextMonth})}}>{nextMonth.format('MMM')}</a>
        </div>
      </nav>
    </header>
  )
}

const mapStateToProps = state => ({
  date: state.selectedDate
});

export default connect(mapStateToProps)(Header);