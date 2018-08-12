import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import './header.css';

const Header = ( { date } ) => {
  return (
    <header>
      <nav className="month-nav">
        <div className="previous-month">
          <a href="#">{moment(date).subtract(1, "month").format('MMM')}</a>
        </div>
        <div className="current-month">
          {moment(date).format('MMMM')}
        </div>
        <div className="next-month">
          <a href="#">{moment(date).add(1, "month").format('MMM')}</a>
        </div>
      </nav>
    </header>
  )
}

const mapStateToProps = state => ({
  date: state.selectedDate
});

export default connect(mapStateToProps)(Header);