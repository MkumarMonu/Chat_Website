// features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getYourConnections } from "./connectionApi";
// Thunks
export const getConnectios = createAsyncThunk(
  "connections/getConnectios",
  getYourConnections
);

const connectionApiSlice = createSlice({
  name: "connection",
  initialState: {
    connections: null,
    loading: false,
    error: null,
  },
  reducers: {
    addConnection: (state, action) => {
      state.connections = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getConnectios.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getConnectios.fulfilled, (state, action) => {
        state.loading = false;
        state.connections = action.payload.data;
      })
      .addCase(getConnectios.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export const { logoutUser } = authSlice.actions;
// export const { addUser } = authSlice.actions;
export const { addConnection } = connectionApiSlice.actions;
export default connectionApiSlice.reducer;
