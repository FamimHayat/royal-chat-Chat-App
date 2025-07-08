import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";


import Layout from "./layout/Index"
import Home from "./pages/Home"
import Groups from "./pages/Groups"
import FriendList from "./pages/FriendList"
import SignIn from "./components/home-components/SignIn"
import SignUp from "./components/home-components/SignUp"

import MyProfile from "./pages/MyProfile"



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/chats" element={<Home />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/friendList" element={<FriendList />} />
            <Route path="/myProfile" element={<MyProfile />} />
          </Route>
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
