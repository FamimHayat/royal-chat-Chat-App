import { configureStore } from "@reduxjs/toolkit";

import MyAuthSlice from "./slices/MyAuthSlice";
import FriendAuthSlice from "./slices/FriendAuthSlice";

export default configureStore({
  reducer: {
    signedUserData: MyAuthSlice,
    friendUserData: FriendAuthSlice,
  },
});
