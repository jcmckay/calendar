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

    const reminder = this.props.reminder;

    this.state = {
      id: reminder ? reminder.id : null,
      reminderText: reminder ? reminder.text : '',
      color: reminder ? reminder.color : '#0c02d0',
      date: reminder ? moment(reminder.date) : moment(),
      originalDate: reminder ? moment(reminder.date) : null
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
                const reminder = {
                        id: this.state.id,
                        text: this.state.reminderText,
                        color: this.state.color,
                        date: this.state.date,
                        originalDate: this.state.originalDate
                      },
                      type = this.props.reminder ? 'UPDATE_REMINDER' : 'CREATE_REMINDER';

                this.props.dispatch({type: type, reminder: reminder });
                this.props.dispatch(this.props.dispatch({type: 'HIDE_REMINDER_FORM' }));
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

const mapStateToProps = state => ({
  reminder: state.reminder
});

export default connect(mapStateToProps)(ReminderForm);