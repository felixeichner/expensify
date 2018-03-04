import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import moment from 'moment';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({
  description: 'Water bill',
  note: 'February monthly bills',
  amount: 2000,
  createdAt: moment("2018/02/02").valueOf()
}));
store.dispatch(addExpense({
  description: 'Gas bill',
  note: 'February monthly bills',
  amount: 3000,
  createdAt: moment("2018/02/04").valueOf()
}));
store.dispatch(addExpense({
  description: 'Groceries',
  note: 'February shopping',
  amount: 4534,
  createdAt: moment("2018/02/26").valueOf()
}));
store.dispatch(addExpense({
  description: 'Shoes',
  note: 'January shopping',
  amount: 11000,
  createdAt: moment("2018/01/15").valueOf()
}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));