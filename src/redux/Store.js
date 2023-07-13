import { configureStore } from '@reduxjs/toolkit';
import amazonReducer from "../redux/AmazonSlice"

export const store = configureStore({
  reducer: {amazonReducer},
});