import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Expenses Reducer
const addExpense = ({
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

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
};

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
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

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// Manipulating store data
const expenseOne = store.dispatch(addExpense({
  description: 'Rent',
  amount: 37200,
  createdAt: new Date("2018/01/12")
}));
const expenseTwo = store.dispatch(addExpense({
  description: 'Coffee',
  note: 'After grocery shopping I went to have coffee with Liz',
  amount: 350,
  createdAt: new Date("2017/10/27")
}));
const expenseThree = store.dispatch(addExpense({
  description: 'Groceries',
  amount: 2399,
  createdAt: new Date("2017/06/03")
}));


// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseThree.expense.id, { amount: 4235 }));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter('roc'));
store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
store.dispatch(sortByDate());


// store.dispatch(setStartDate(new Date("2017/09/12")));
// store.dispatch(setStartDate());

// store.dispatch(setEndDate(new Date("2017/11/12")));
// store.dispatch(setEndDate());

// const demoState = {
//   expenses: [{
//     id: 'sdfetntent',
//     description: 'January Rent',
//     note: 'first increased rent payment',
//     amount: 37200,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', //amount or date
//     startDate: undefined,
//     endDate: undefined
//   }
// };