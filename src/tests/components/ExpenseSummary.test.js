import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary with no expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={0} />);
  expect(wrapper
    .containsMatchingElement(<strong>No of expenses: 0</strong>))
    .toBe(true);
  expect(wrapper
    .containsMatchingElement(<strong>Total amount: € 0,00</strong>))
    .toBe(true);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with one expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={12354} />);
  expect(wrapper
    .containsMatchingElement(<strong>No of expenses: 1</strong>))
    .toBe(true);
  expect(wrapper
    .containsMatchingElement(<strong>Total amount: € 123,54</strong>))
    .toBe(true);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={625437} />);
  expect(wrapper
    .containsMatchingElement(<strong>No of expenses: 23</strong>))
    .toBe(true);
  expect(wrapper
    .containsMatchingElement(<strong>Total amount: € 6 254,37</strong>))
    .toBe(true);
  expect(wrapper).toMatchSnapshot();
});