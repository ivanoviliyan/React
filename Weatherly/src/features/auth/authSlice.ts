import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
   isAuthenticated: boolean;
   user: null | { id: number; email: string; username: string };
}

const initialState = {
   isAuthenticated: false,
   user: null,
} satisfies AuthState as AuthState;

const authState = createSlice({
   name: 'authentication',
   initialState,
   reducers: {
      login(state) {
         state.isAuthenticated = true;
         state.user = {
            id: 1,
            email: 'test_user@abv.bg',
            username: 'basic',
         };
      },
      logout(state) {
         state.isAuthenticated = false;
         state.user = null;
      },
   },
});

export const { login, logout } = authState.actions;
export default authState.reducer;
