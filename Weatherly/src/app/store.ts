import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice';
import favoritesSlice from '../features/favorites/favoritesSlice';
import settingsSlice from '../features/settings/settingsSlice';
import weatherSlice from '../features/weather/weatherSlice';

export const store = configureStore({
   reducer: {
      auth: authSlice,
      favorites: favoritesSlice,
      settings: settingsSlice,
      weather: weatherSlice,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
