import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import 'numeral/locales/de';

numeral.locale('de');

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => {
  return (
    <tr>
      <td><Link to={`/edit/${id}`}><strong>{description}</strong></Link></td>
      <td>{note}</td>
      <td>{numeral(amount / 100).format('$ 0,0.00')}</td>
      <td>{moment(createdAt).format("DD. MMM YYYY")}</td>
    </tr>
  )
};

export default ExpenseListItem;