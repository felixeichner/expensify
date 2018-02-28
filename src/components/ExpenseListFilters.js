import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const ExpenseListFilters = (props) => (
  <div id={'filter-bar'}>
    <span>
      <strong>Search for: </strong>
      <input
        type="text"
        value={props.filters.text}
        onChange={(e) => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      />
    </span>
    <span>
      <strong>Filter by: </strong>
      <select
        value={props.filters.sortBy}
        onChange={(e) => {
          props.dispatch((e.target.value === 'amount') ? sortByAmount() : sortByDate());
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </span>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);