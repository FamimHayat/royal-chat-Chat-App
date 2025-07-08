import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "user-authentication",
  initialState: {
    user: 0,
  },
  reducers: {
    signedUser: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { signedUser } = authSlice.actions;

export default authSlice.reducer;
