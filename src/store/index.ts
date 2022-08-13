import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import userSlice from "../features/user/userSlice";

const rootReducers = combineReducers({
  user: userSlice,
  counter: counterSlice,
});

export const store = configureStore({
  reducer: rootReducers,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
