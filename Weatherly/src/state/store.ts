import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import favoritesReducer from './favorites/favoritesSlice';
import settingsReducer from './settings/settingsSlice';
import weatherReducer from './weather/weatherSlice';

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
