import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboard = () => (
  <div className="content-container">
    <ExpensesSummary />
    <Link to="/create">
      <button className="button">Add Expense</button>
    </Link>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;