import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  token: localStorage.getItem('token') || null,
  isLoggedIn: localStorage.getItem('token') ? true : false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
        localStorage.setItem('token',action.payload)
        state.token = action.payload;
        state.isLoggedIn = true;
    },
    logout: (state) => {
        localStorage.removeItem('token')
        state.token = null;
        state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
