import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "user-authentication",
  initialState: {
    UserData: JSON.parse(localStorage.getItem("signedUserData")) || null,
  },
  reducers: {
    signedUser: (state, action) => {
      state.UserData = action.payload
      localStorage.setItem("signedUserData",JSON.stringify(action.payload));
      
    },
  },
});

// Action creators are generated for each case reducer function
export const { signedUser } = authSlice.actions;

export default authSlice.reducer;
