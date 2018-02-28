import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <div className="navbar">
      <NavLink exact to="/" activeClassName="is-active">Dashboard</NavLink>
      <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>
  </header>
);

export default Header;