import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({
  description: 'Water bill',
  note: 'February monthly bills',
  amount: 2000,
  createdAt: new Date("2018/02/02")
}));
store.dispatch(addExpense({
  description: 'Gas bill',
  note: 'February monthly bills',
  amount: 3000,
  createdAt: new Date("2018/02/04")
}));
store.dispatch(addExpense({
  description: 'Groceries',
  note: 'February shopping',
  amount: 4534,
  createdAt: new Date("2018/02/26")
}));
store.dispatch(addExpense({
  description: 'Shoes',
  note: 'January shopping',
  amount: 11000,
  createdAt: new Date("2018/01/15")
}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));