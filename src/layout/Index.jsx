import React from "react";

import { Navigate, Outlet } from "react-router";
import NavBar from "./NavBar"
import { useSelector } from "react-redux"

const Layout = () => {
  const myData = useSelector((state) => state.signedUserData.UserData);
  
  if (!myData) {
   return <Navigate to={"/signIn"} />
  }
    return (
      <>
        <NavBar />
        <Outlet />
      </>
    );
};

export default Layout;
