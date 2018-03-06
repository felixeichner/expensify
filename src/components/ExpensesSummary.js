import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import 'numeral/locales/de';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

numeral.locale('de');

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  return (
    <div id={'summary-bar'}>
      <span>
        <strong>No of expenses: {expenseCount}</strong>
      </span>
      <span>
        <strong>Total amount: {numeral(expensesTotal / 100).format('$ 0,0.00')}</strong>
      </span>
    </div>
  )
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: getExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);