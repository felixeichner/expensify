import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? numeral(props.expense.amount / 100).format('0.00') : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\,\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide a description and a valid amount' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(numeral(this.state.amount).value(), 10) * 100,
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input 
          type="text"
          value={this.state.description}
          placeholder="Description"
          autoFocus
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          value={this.state.amount}
          placeholder="Amount"
          onChange={this.onAmountChange}
        />
        <textarea
          value={this.state.note}
          placeholder="Add a note for your expense (optional)"
          onChange={this.onNoteChange}
        >
        </textarea>
        <div className="single-date-picker">
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat={"DD. MMM YYYY"}
          />
        </div>
        <div className="submit-button">
          <button type="submit" className="button">
            {this.props.expense ? 'Update Expense' : 'Add Expense'}
          </button>
        </div>
      </form>
    )
  }
};