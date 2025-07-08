import React from "react";

const GroupItem = () => {
  return (
    <div>
      <button className="w-full flex h-fit cursor-pointer py-1 bg-[#0000005f] px-4 transition-all hover:scale-102 hover:bg-[#000000ac] active:bg-transparent">
        <div className="h-15 w-15 border-2 border-transparent mr-2 lg:mr-5 rounded-full outline-2 ">
          <img
            src="/groups.png"
            alt="user-image"
            className="w-15 rounded-full "
          />
        </div>
        <div className="text-left">
          <p className="text-2xl font-headerFont text-white tracking-wide">
            groupName
          </p>
          <p className="text-lg font-textFont text-white tracking-wide">
            groupMassage
          </p>
        </div>
        <div className="ml-auto">
          <p className="text-lg font-textFont text-white">time</p>
        </div>
      </button>
    </div>
  );
};

export default GroupItem;
