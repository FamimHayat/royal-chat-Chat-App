import React from "react";
import { FaCheck } from "react-icons/fa"
import { IoCheckmarkDoneSharp } from "react-icons/io5"

const User = () => {
  return (
    <button className="w-full flex items-center h-fit   py-1 bg-[#0000004b] px-4 active:bg-transparent">
      <div className="h-15 w-15 border-2 border-transparent mr-2 lg:mr-5 rounded-full outline-2 ">
        <img src="/users.png" alt="user-image" className="w-15 rounded-full " />
      </div>
      <div className="text-left">
        <p className="text-2xl font-headerFont text-white tracking-wide">
          username
        </p>
      </div>
      <div className="ml-auto">
         <button
          onClick={() => setUserModal(false)}
          className="w-fit ml-auto bg-[#0000007d] mr-2 text-white py-1.5 rounded-4xl font-headerFont flex items-center  text-2xl  cursor-pointer px-4 active:bg-transparent transition-all hover:text-[#000000c3] hover:bg-[#7bc36bfc]"
        >
          add
        </button> 

        {/* <div className="flex items-center gap-2 bg-[#00000089] p-1">
          <p className=" hidden sm:flex text-green-600 text-2xl ">friends</p>
          <IoCheckmarkDoneSharp className=" text-xl text-green-600" />
        </div> */}
      </div>
    </button>
  );
};

export default User;
