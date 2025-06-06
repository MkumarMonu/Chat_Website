// features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllUserApi,
  fetchUserApi,
  loginAPI,
  logoutUserApi,
  registerAPI,
} from "./authApi.js";

// Thunks
export const loginUser = createAsyncThunk("auth/loginUser", loginAPI);
export const registerUser = createAsyncThunk("auth/registerUser", registerAPI);
export const fetchUser = createAsyncThunk("auth/fetchUser", fetchUserApi);
export const fetchAllUser = createAsyncThunk(
  "auth/fetchAllUser",
  fetchAllUserApi
);
export const logoutUser = createAsyncThunk("auth/logoutUser", logoutUserApi);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    allUser: null,
    loading: false,
    error: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.error.message;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = null;
      })
      .addCase(fetchAllUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUser.fulfilled, (state, action) => {
        state.loading = false;
        state.allUser = action.payload.users;
      })
      .addCase(fetchAllUser.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.error.message;
      });
  },
});

// export const { logoutUser } = authSlice.actions;
export const { addUser } = authSlice.actions;
export default authSlice.reducer;
