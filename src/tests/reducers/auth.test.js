import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
  const state = authReducer(undefined, { type: 'LOGIN', uid: 'test-uid' });
  expect(state.uid).toEqual('test-uid');
});

test('should clear uid for logout', () => {
  const state = authReducer({ uid: 'test-uid' }, { type: 'LOGOUT' });
  expect(state).toEqual({});
});