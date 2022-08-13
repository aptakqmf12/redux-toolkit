import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { User, UserState } from "../../types/user";
import { RootState } from "../../store";

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

const initialState: any = {};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state: RootState, action) => {
        state.user = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

// export const {   } = counterSlice.actions;
export default counterSlice.reducer;
