import React from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = (e) => this.props.setTextFilter(e.target.value);
  onSortChange = (e) => {
    if (e.target.value === 'amount') {
      this.props.sortByAmount();
    } else {
      this.props.sortByDate();
    }
  };
  render() {
    return (
      <div id={'filter-bar'}>
        <span>
          <strong>Search for: </strong>
          <input
            type="text"
            value={this.props.filters.text}
            onChange={this.onTextChange}
          />
        </span>
        <span>
          <strong>Sort by: </strong>
          <select
            value={this.props.filters.sortBy}
            onChange={this.onSortChange}
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

const mapStateToProps = (state) => ({
  filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);