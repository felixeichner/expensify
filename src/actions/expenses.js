import uuid from 'uuid';

// Adding expenses
export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = new Date()
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// Deleting expenses
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// Editing expenses
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});