"use client"
import { configureStore } from '@reduxjs/toolkit';
import covidReducer from './covidSlie';

const store = configureStore({
  reducer: {
    covid: covidReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
