import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import 'numeral/locales/de';

numeral.locale('de');

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => {
  return (
    <Link to={`/edit/${id}`} className="expenses-list__content">
      <span>
        <p className="list-item description">{description}</p>
        <p className="list-item note">{note}</p>
        <p className="list-item created-at">{moment(createdAt).format("DD. MMM YYYY")}</p>
      </span>
      <span>
        <p className="list-item amount">{numeral(amount / 100).format('$ 0,0.00')}</p>
      </span>
    </Link>
  )
};

export default ExpenseListItem;