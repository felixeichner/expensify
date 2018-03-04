import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = (props) => {
  return (
    <div>
      <h3>Expense List</h3>
      {
        props.expenses.length === 0 ? (
          <h4>No expenses to list!</h4>
        ) : (
          <table style={{width: '100%'}}>
            <tbody>
              <tr style={{textAlign: 'left'}}>
                <th>Description</th>
                <th>Note</th>
                <th>Amount</th>
                <th>created at</th>
              </tr>
              {props.expenses.map((expense) => (
                <ExpenseListItem key={expense.id} {...expense} />
              ))}
            </tbody>
          </table>  
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