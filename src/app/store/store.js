import { configureStore } from "@reduxjs/toolkit";
import apiDataReducer from './slices/apDataSlice';

export const store = configureStore({
      reducer : {
        apiData: apiDataReducer,
      }
})