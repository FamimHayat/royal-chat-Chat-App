import { createSlice } from "@reduxjs/toolkit";

export const FriendAuthSlice = createSlice({
  name: "user-authentication",
  initialState: {
    UserData: null,
    groupData: null,
  },
  reducers: {
    friendUser: (state, action) => {
      state.UserData = action.payload;
    },
    groupChat: (state, action) => {
      state.groupData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { friendUser, groupChat } = FriendAuthSlice.actions;

export default FriendAuthSlice.reducer;
