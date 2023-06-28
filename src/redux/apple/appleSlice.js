import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  apple: [],
  isLoading: false,
  error: undefined,
};

const url = 'https://financialmodelingprep.com/api/v3/income-statement/AAPL?limit=120&apikey=11805f8fd368addce68a7b4f772c3a6c';

export const fetchAppleData = createAsyncThunk('apple/fetchAppleData', async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch Apple Data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch Apple Data');
  }
});

const appleSlice = createSlice({
  name: 'appleSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAppleData.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchAppleData.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        apple: action.payload,
      }))
      .addCase(fetchAppleData.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
  },
});

export default appleSlice.reducer;
