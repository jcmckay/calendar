import React, { Component } from 'react';
import Calendar from './calendar';
import ReminderForm from './reminder-form';
import './App.css';

class App extends Component {

  state = {
    showAddReminder: false
  }

  toggleReminderForm = () => {
    const showAddReminder = this.state.showAddReminder;
    this.setState({showAddReminder: !showAddReminder});
  }

  render() {
    return (
      <div className="app">
        <Calendar />
        { this.state.showAddReminder ? <ReminderForm toggleForm={this.toggleReminderForm} /> : null }
        <div className="toggleWrapper">
          <button className="toggleAddReminder" onClick={this.toggleReminderForm} value="+">+</button>
        </div>
      </div>
    );
  }
}

export default App;
