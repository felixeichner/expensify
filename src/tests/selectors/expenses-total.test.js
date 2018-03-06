import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toEqual(0);
});

test('should add up single expense correctly', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toEqual(expenses[0].amount);
});

test('should add up multiple expenses correctly', () => {
  const result = selectExpensesTotal(expenses);
  const expectedResult =
    expenses[0].amount + expenses[1].amount + expenses[2].amount + expenses[3].amount;
  expect(result).toEqual(expectedResult);
});
