//slice came from splitting up redux state object into multiple slices of state
// a slice is collection of reducer logic & action for a single feature of app

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (stateDec) => {
      stateDec.count -= 1;
    },
    reset: (reset) => {
      reset.count = 0;
    },
    reset: (reset) => {
      reset.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});
// Will handle the action type `'counter/increment'`
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
