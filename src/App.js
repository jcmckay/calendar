import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from './calendar';
import ReminderForm from './reminder-form';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Calendar />
        { this.props.showReminderForm ? <ReminderForm /> : null }
        <div className="toggleWrapper">
          <button
            className="toggleAddReminder"
            onClick={() => {
              this.props.dispatch({type: 'SHOW_REMINDER_FORM' });
              this.props.dispatch({ type: 'CLEAR_REMINDER_FOCUS' });
            }}>+</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showReminderForm: state.showReminderForm
});

export default connect(mapStateToProps)(App);
