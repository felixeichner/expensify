import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  render() {
    return (
      <div id={'filter-bar'}>
        <span>
          <strong>Search for: </strong>
          <input
            type="text"
            value={this.props.filters.text}
            onChange={(e) => {
              this.props.dispatch(setTextFilter(e.target.value));
            }}
          />
        </span>
        <span>
          <strong>Sort by: </strong>
          <select
            value={this.props.filters.sortBy}
            onChange={(e) => {
              this.props.dispatch((e.target.value === 'amount') ? sortByAmount() : sortByDate());
            }}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </span>
        <span>
          <strong>Filter by date: </strong>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            startDateId="startDateId"
            endDate={this.props.filters.endDate}
            endDateId="endDateId"
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
            displayFormat={"DD. MMM YYYY"}
          />
        </span>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
};

export default connect(mapStateToProps)(ExpenseListFilters);