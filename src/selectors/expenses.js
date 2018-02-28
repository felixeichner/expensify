// Get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = () => !(startDate instanceof Date) || expense.createdAt >= startDate;
    const endDateMatch = () => !(endDate instanceof Date) || expense.createdAt <= endDate;
    const textMatch = () => {
      const expenseDescription = expense.description.toLowerCase();
      const expenseNote = expense.note.toLowerCase();
      const filterText = text.toLowerCase();
      return expenseDescription.includes(filterText) || expenseNote.includes(filterText);
    };
    return startDateMatch() && endDateMatch() && textMatch();
  }).sort((a,b) => {
    if (sortBy === 'amount') {
      return b.amount - a.amount;
    } else {
      return b.createdAt - a.createdAt;
    }
  });
};