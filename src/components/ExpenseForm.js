import React from 'react';
import { addExpense } from '../actions/expenses';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false
  };
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
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }));
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    dispatch(addExpense({
      description: this.state.description,
      note: this.state.note,
      amount: this.state.amount * 100
    }));
  };
  render() {
    return (
      <form id="expense-form" onSubmit={this.onSubmit}>
        <table>
          <tbody>
            <tr>
              <th>Description</th>
              <td>
                <input 
                  type="text"
                  value={this.state.description}
                  placeholder="Description"
                  autoFocus
                  onChange={this.onDescriptionChange}
                />
              </td>
            </tr>
            <tr>
              <th>Amount</th>
              <td>
                <input
                  type="text"
                  value={this.state.amount}
                  placeholder="Amount"
                  onChange={this.onAmountChange}
                />
              </td>
            </tr>
            <tr>
              <th>Note</th>
              <td>
                <textarea
                  value={this.state.note}
                  placeholder="Add a note for your expense (optional)"
                  onChange={this.onNoteChange}
                >
                </textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          displayFormat={"DD. MMM YYYY"}
        />
        <p><button type="submit">Add Expense</button></p>
      </form>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  };
};

// export default connect(mapStateToProps)(ExpenseForm);