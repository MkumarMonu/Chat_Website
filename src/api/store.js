import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import connectionReducer from "../features/connectionApi/connectionApiSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  connections: connectionReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
