import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import 'numeral/locales/de';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

numeral.locale('de');

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  return (
    <div className="page-header">
      Viewing <span className="bold">{expenseCount}</span>
      {expenseCount === 1 ? ' expense ' : ' expenses '}
      totalling <span className="bold">{numeral(expensesTotal / 100).format('$ 0,0.00')}</span>
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