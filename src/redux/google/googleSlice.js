import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  google: [],
  isLoading: false,
  error: undefined,
};

const url = 'https://financialmodelingprep.com/api/v3/income-statement/GOOGL?limit=120&apikey=095953458cee77b4d4e567e4e4769368';

export const fetchGoogleData = createAsyncThunk('google/fetchGoogleData', async () => {
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

const googleSlice = createSlice({
  name: 'googleSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGoogleData.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchGoogleData.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        google: action.payload,
      }))
      .addCase(fetchGoogleData.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
  },
});

export default googleSlice.reducer;
