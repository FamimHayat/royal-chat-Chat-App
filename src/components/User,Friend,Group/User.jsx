import React from "react";

const User = () => {
  return (
    <button className="w-full flex items-center h-fit  cursor-pointer py-1 bg-[#0000005f] px-4 active:bg-transparent">
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
          className="w-fit ml-auto bg-[#000000a2] mr-2 text-white py-1.5 rounded-4xl font-headerFont flex items-center  text-2xl  cursor-pointer px-4 active:bg-transparent transition-all hover:bg-[#000d]"
        >
          add
        </button>
      </div>
    </button>
  );
};

export default User;
