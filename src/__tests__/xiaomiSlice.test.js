import xiaomiReducer, { fetchXiaomiData } from '../redux/xiaomi/xiaomiSlice';

test('reducers', () => {
  let state = null;
  state = xiaomiReducer(undefined, fetchXiaomiData.pending());
  expect(state.isLoading).toBe(true);
});
