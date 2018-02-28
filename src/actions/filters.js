// Setting a text filter
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// Set sorting by amounts
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// Set sorting by dates
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// Setting a start date filter
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// Setting am end date filter
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});