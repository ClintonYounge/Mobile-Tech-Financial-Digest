import googleReducer, { fetchGoogleData } from '../redux/google/googleSlice';

test('reducers', () => {
  let state = null;
  state = googleReducer(undefined, fetchGoogleData.pending());
  expect(state.isLoading).toBe(true);
});
