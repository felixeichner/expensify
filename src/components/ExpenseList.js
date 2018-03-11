import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = (props) => {
  return (
    <div className="expenses-list">
      <div className="expenses-list__header">
        <span>Expenses</span>
        <span>Amount</span>
      </div>
      {
        props.expenses.length === 0 ? (
          <div className="expenses-list__content bold">No expenses to list!</div>
        ) : (
          props.expenses.map((expense) => (
            <ExpenseListItem key={expense.id} {...expense} />
          ))
        )
      }
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
};

export default connect(mapStateToProps)(ExpenseList);