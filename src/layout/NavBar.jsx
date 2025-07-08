import React, { useState } from "react";
import { LuCrown, LuSettings } from "react-icons/lu";

import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { useDispatch } from "react-redux"
import { Link, Navigate, useNavigate } from "react-router";
import { signedUser } from "../../reduxStorage/slices/authSlice"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch()
  const handleSignOut = () => {
    dispatch(signedUser(null))
    
  }

  return (
    <>
      <nav className=" bg-[#0000002b] mx-auto px-6 py-3 border-b-1 border-[#ffffff4e]">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[25px] flex gap-2 items-center  font-semibold tracking-wide text-[#000000d4] font-headerFont">
              <LuCrown /> Royal chat
            </h2>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center md:gap-4 lg:gap-6 xl:gap-10 ">
              <li className=" cursor pointer">
                <Link
                  to="/"
                  className="nav-li-css h-full  px-4 bg-[#00000040]  hover:bg-[#00000080] text-[#ffffff]  font-headerFont  text-[20px] border-transparent transition-all focus:scale-130 border-b-2 focus:border-white focus:bg-[#00000090]  "
                >
                  chats
                </Link>
              </li>
              <li>
                <Link
                  to="/groups"
                  className=" nav-li-css h-full  px-4 bg-[#00000040] hover:bg-[#00000080] text-white font-headerFont text-[20px] border-transparent transition-all focus:scale-130 border-b-2 focus:border-white focus:bg-[#00000090]  "
                >
                  groups
                </Link>
              </li>
              <li>
                <Link
                  to="/friendList"
                  className=" nav-li-css h-full  px-4 bg-[#00000040] hover:bg-[#00000080] text-white font-headerFont text-[20px] border-transparent transition-all focus:scale-120 xl:focus:scale-130 border-b-2 focus:border-white focus:bg-[#00000090]  "
                >
                  friend List
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex">
            <Link
              to="/myProfile"
              className=" nav-li-css h-full  px-4 bg-[#00000040] hover:bg-[#00000080] text-white font-headerFont text-[20px] border-transparent transition-all focus:scale-130 border-b-2 focus:border-white focus:bg-[#00000090]  "
            >
              my profile
            </Link>
            <Link
              to="/myProfile"
              onClick={handleSignOut}
              className="ml-2 h-full  px-4 bg-[#00000040] hover:bg-[#00000080] text-white font-headerFont text-[20px] border-transparent transition-all focus:scale-130 border-b-2 focus:border-white focus:bg-[#00000090]  "
            >
              signOut
            </Link>
          </div>

          <div className="md:hidden">
            <button
              className="cursor-pointer outline-none mobile-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <PiDotsThreeOutlineFill className="text-[35px] text-white" />
            </button>
          </div>
        </div>

        <div className={`mobile-menu ${menuOpen ? "" : "hidden"} md:hidden`}>
          <ul className=" my-4 space-y-4">
            <li>
              <Link
                to="/"
                className=" block px-4 py-2 text-[30px] w-full bg-[#000000b7] text-white font-headerFont rounded nav-custom-shadow active:bg-black focus:text-brandColor"
              >
                chats
              </Link>
            </li>
            <li>
              <Link
                to="/  groups"
                className="block px-4 py-2 text-[30px] w-full text-white font-headerFont bg-[#000000b7] rounded nav-custom-shadow active:bg-black focus:text-brandColor"
              >
                groups
              </Link>
            </li>
            <li>
              <Link
                to="/friendList"
                className="block px-4 py-2 text-[30px] w-full text-white font-headerFont bg-[#000000b7] rounded nav-custom-shadow active:bg-black focus:text-brandColor"
              >
                friend List
              </Link>
            </li>
            <li>
              <Link
                to="/myProfile"
                className="block px-4 py-2 text-[30px] w-full text-white font-headerFont bg-[#000000b7] rounded nav-custom-shadow active:bg-black focus:text-brandColor"
              >
                <p className="flex items-center justify-between ">
                  {" "}
                  profile settings <LuSettings />
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
