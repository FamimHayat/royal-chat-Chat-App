import { createSlice } from "@reduxjs/toolkit";

export const FriendAuthSlice = createSlice({
  name: "user-authentication",
  initialState: {
    UserData: null,
  },
  reducers: {
    friendUser: (state, action) => {
      state.UserData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { friendUser } = FriendAuthSlice.actions;

export default FriendAuthSlice.reducer;
