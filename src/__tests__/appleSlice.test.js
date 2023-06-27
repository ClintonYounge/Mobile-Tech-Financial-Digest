import appleReducer, { fetchAppleData } from '../redux/apple/appleSlice';

test('reducers', () => {
  let state = null;
  state = appleReducer(undefined, fetchAppleData.pending());
  expect(state.isLoading).toBe(true);
});
