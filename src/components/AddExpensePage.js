import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const AddExpense = (props) => (
  <div>
    <h4>Add Expense:</h4>
    <ExpenseForm 
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpense);