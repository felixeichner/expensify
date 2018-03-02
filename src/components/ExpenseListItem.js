import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import ExpenseList from './ExpenseList';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, note, amount, createdAt }) => {
  return (
    <tr>
      <td><Link to={`/edit/${id}`}><strong>{description}</strong></Link></td>
      <td>{note}</td>
      <td>{amount}</td>
      <td>{moment(createdAt).format("DD. MMM YYYY")}</td>
      <td><button onClick={() => {
        dispatch(removeExpense({ id }));
      }}>Remove</button></td>
    </tr>
  )
};

export default connect()(ExpenseListItem);