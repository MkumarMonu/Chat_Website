// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../../features/auth/authSlice";

// export default configureStore({
//   // reducer: {},
//   auth: authReducer,
// });

// app/store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"; // Import your slices here

const rootReducer = combineReducers({
  auth: authReducer, // Add more reducers as needed
});

const store = configureStore({
  reducer: rootReducer, // Combine and configure in the same file
});

export default store;
