import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import { SketchPicker } from 'react-color';
import './reminder-form.css';
import 'react-datepicker/dist/react-datepicker.css';

class ReminderForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      reminderText: '',
      color: '#0c02d0',
      date: moment()
    };
  }

  handleReminderTextChange = (e) => {
    const text = e.target.value;
    this.setState({ reminderText: text.substring(0,30) });
  }

  handleDateChange = (date) => {
    this.setState({ date: date });
  }

  handleColorChange = (color) => {
    this.setState({color: color.hex});
  }

  render() {
    return (
      <div className="reminder-form-container">
        <form className="reminder-form"
              onSubmit={(e) => {
                e.preventDefault();
                const reminder = { text: this.state.reminderText, color: this.state.color, date: this.state.date };
                this.props.dispatch({type: 'CREATE_REMINDER', reminder: reminder });
                this.props.dispatch(this.props.dispatch({type: 'HIDE_REMINDER_FORM', value: false }));
        }}>
          <h2>Create a Reminder</h2>
          <DatePicker
            selected={this.state.date}
            onChange={this.handleDateChange}
          />
          <label>Reminder Text:</label>
          <textarea rows="2" maxLength="30" value={this.state.reminderText} onChange={this.handleReminderTextChange} />
          <label>Color:</label>
          <input type="text" disabled="disabled" value={this.state.color} />
          <SketchPicker color={ this.state.color } onChangeComplete={this.handleColorChange} />

          <br/>
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default connect()(ReminderForm);