import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  samsung: [],
  isLoading: false,
  error: undefined,
};

const url = 'https://financialmodelingprep.com/api/v3/income-statement/SSNLF?limit=120&apikey=905dc389a0724ce5c8829e3daf821752';

export const fetchSamsungData = createAsyncThunk('samsung/fetchSamsungData', async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch Samsung Data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch Samsung Data');
  }
});

const samsungSlice = createSlice({
  name: 'samsungSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSamsungData.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchSamsungData.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        samsung: action.payload,
      }))
      .addCase(fetchSamsungData.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
  },
});

export default samsungSlice.reducer;
