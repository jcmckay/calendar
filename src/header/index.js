import React from 'react';
import moment from 'moment';
import './header.css';

const Header = () => {
  return (
    <header>
      <nav className="month-nav">
        <div className="previous-month">
          <a href="#">{moment().subtract(1, "month").format('MMM')}</a>
        </div>
        <div className="current-month">
          {moment().format('MMMM')}
        </div>
        <div className="next-month">
          <a href="#">{moment().add(1, "month").format('MMM')}</a>
        </div>
      </nav>
    </header>
  )
}

export default Header;