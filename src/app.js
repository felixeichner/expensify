import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpensifyApp from './components/ExpensifyApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    This is the dashbord content
  </div>
);

const AddExpensePage = () => (
  <div>
    This is the AddExpensePage content
  </div>
);

const EditExpensePage = () => (
  <div>
    This is the EditExpensePage content
  </div>
);

const HelpPage = () => (
  <div>
    This is the HelpPage content
  </div>
);

const NotFoundPage = () => (
  <div>
    404!
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));