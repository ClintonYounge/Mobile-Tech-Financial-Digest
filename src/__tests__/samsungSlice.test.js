import samsungReducer, { fetchSamsungData } from '../redux/samsung/samsungSlice';

test('reducers', () => {
  let state = null;
  state = samsungReducer(undefined, fetchSamsungData.pending());
  expect(state.isLoading).toBe(true);
});
