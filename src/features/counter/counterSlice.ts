import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    incrementByNumber: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, incrementByNumber } = counterSlice.actions;
export default counterSlice.reducer;
