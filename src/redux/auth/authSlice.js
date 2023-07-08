import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
      };      
    },
    [logIn.fulfilled](state, action) {
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLoggedIn: true,
      };
    },
    [logOut.fulfilled](state) {
      return {
        ...state,
        user: {
          name: null,
          email: null,
        },
        token: null,
        isLoggedIn: false,
      };
    },
    [refreshUser.pending](state) {
      return {
        ...state,
        isRefreshing: true,
      };
    },
    [refreshUser.fulfilled](state, action) {
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        isRefreshing: false,
      };
    },
    [refreshUser.rejected](state) {
      return {
        ...state,
        isRefreshing: false,
      };
    },
  },
});

export const authReducer = authSlice.reducer;