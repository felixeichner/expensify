import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../../actions/filters';
import moment from 'moment';

test('should generate set text filter action object with provided string', () => {
  const result = setTextFilter('test string');
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'test string'
  });
});

test('should generate set text filter action object with default value', () => {
  const result = setTextFilter();
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should generate sort by amount filter action object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});

test('should generate sort by date filter action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate set start date action object', () => {
  const startDate = moment(1234);
  const result = setStartDate(startDate);
  expect(result).toEqual({
    type: 'SET_START_DATE',
    startDate
  });
});

test('should generate set end date action object', () => {
  const result = setEndDate(moment(4321));
  expect(result).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(4321)
  });
});