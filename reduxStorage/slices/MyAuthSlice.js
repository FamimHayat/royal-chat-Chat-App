import { createSlice } from "@reduxjs/toolkit";

export const MyAuthSlice = createSlice({
  name: "user-authentication",
  initialState: {
    UserData: JSON.parse(localStorage.getItem("signedUserData")) || null,
  },
  reducers: {
    signedUser: (state, action) => {
      state.UserData = action.payload;
      localStorage.setItem("signedUserData", JSON.stringify(action.payload));
    },
  },
});

// Action creators are generated for each case reducer function
export const { signedUser } = MyAuthSlice.actions;

export default MyAuthSlice.reducer;
