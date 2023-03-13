import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../shared/api/AuthAPI';
export const register = createAsyncThunk(
  'user/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      console.log(result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
export const login = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logout();
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  }
);
export const current = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.currentUser(auth.token);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
