import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface WeatherData {
   city: string;
   tempC: number;
   tempF: number;
}

interface WeatherState {
   data: WeatherData | null;
   loading: boolean;
   error: string | null;
}

const initialState: WeatherState = {
   data: null,
   loading: false,
   error: null,
};

const weatherSlice = createSlice({
   name: 'weather',
   initialState,
   reducers: {
      fetchStart(state) {
         state.loading = true;
         state.error = null;
      },
      fetchSuccess(state, action: PayloadAction<WeatherData>) {
         state.loading = false;
         state.data = action.payload;
         state.error = null;
      },
      fetchError(state, action: PayloadAction<string>) {
         state.loading = false;
         state.error = action.payload;
      },
      clearWeather(state) {
         state.data = null;
         state.loading = false;
         state.error = null;
      },
   },
});

export const { fetchStart, fetchSuccess, fetchError, clearWeather } =
   weatherSlice.actions;

export default weatherSlice.reducer;
