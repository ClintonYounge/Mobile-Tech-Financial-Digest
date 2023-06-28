import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  xiaomi: [],
  isLoading: false,
  error: undefined,
};

const url = 'https://financialmodelingprep.com/api/v3/income-statement/XIACF?limit=120&apikey=11805f8fd368addce68a7b4f772c3a6c';

export const fetchXiaomiData = createAsyncThunk('xiaomi/fetchXiaomiData', async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch Xiaomi Data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch Xiaomi Data');
  }
});

const xiaomiSlice = createSlice({
  name: 'xiaomiSlice',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchXiaomiData.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchXiaomiData.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        xiaomi: action.payload,
      }))
      .addCase(fetchXiaomiData.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
  },
});

export default xiaomiSlice.reducer;
