import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props) => {
  return (
    <div>
      <h3>Expense List</h3>
      <table style={{width: '100%'}}>
        <tbody>
          <tr style={{textAlign: 'left'}}>
            <th>Description</th>
            <th>Note</th>
            <th>Amount</th>
            <th>created at</th>
            <th></th>
          </tr>
          {props.expenses.map((expense) => (
            <ExpenseListItem key={expense.id} {...expense} />
          ))}
        </tbody>
      </table>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
};

export default connect(mapStateToProps)(ExpenseList);