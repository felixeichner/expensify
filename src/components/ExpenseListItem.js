import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => {
  return (
    <tr>
      <td><Link to={`/edit/${id}`}><strong>{description}</strong></Link></td>
      <td>{note}</td>
      <td>€ {(amount / 100).toFixed(2)}</td>
      <td>{moment(createdAt).format("DD. MMM YYYY")}</td>
    </tr>
  )
};

export default ExpenseListItem;