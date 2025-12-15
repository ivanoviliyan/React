import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import favoritesReducer from '../features/favorites/favoritesSlice';
import settingsReducer from '../features/settings/settingsSlice';
import weatherReducer from '../features/weather/weatherSlice';

export const store = configureStore({
   reducer: {
      auth: authReducer,
      favorites: favoritesReducer,
      settings: settingsReducer,
      weather: weatherReducer,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
