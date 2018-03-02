import moment from 'moment';

// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = () => {
      const expenseDescription = expense.description.toLowerCase();
      const expenseNote = expense.note.toLowerCase();
      const filterText = text.toLowerCase();
      return expenseDescription.includes(filterText) || expenseNote.includes(filterText);
    };
    return startDateMatch && endDateMatch && textMatch();
  }).sort((a,b) => {
    if (sortBy === 'amount') {
      return b.amount - a.amount;
    } else {
      return b.createdAt - a.createdAt;
    }
  });
};