import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup correct default expenses value', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should add expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '101',
      description: 'Laptop',
      note: '',
      amount: 98900,
      createdAt: 20000
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test('should edit expense by id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {  
      note: 'some note',
      amount: 0
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0]).toEqual({ ...expenses[0], ...action.updates });
});

test('should not edit expense of invalid id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {  
      note: 'some note',
      amount: 0
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2], expenses[3]]);
});

test('should not remove expense by invalid id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});