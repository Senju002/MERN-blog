import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  curentUser: null,
  error: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    signInSuccess: (state, action) => {
      (state.curentUser = action.payload), (state.loading = false);
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { signInStart, signInFailure, signInSuccess } = userSlice.actions;

export default userSlice.reducer;
