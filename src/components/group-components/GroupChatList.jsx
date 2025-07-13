import React, { useState } from "react";

import { HiPlusSmall } from "react-icons/hi2";

import SearchBar from "../other_components/SearchBar";
import GroupItem from "../User,Friend,Group/GroupItem";

const GroupChatList = () => {
  const [groupCreateModal, setGroupCreateModal] = useState(false);
  const [groupJoinModal, setGroupJoinModal] = useState(false);
  return (
    <>
      {groupCreateModal && (
        <div className="absolute w-full rounded-2xl h-[calc(100dvh-63px)] z-20 bg-[#1a5efdaa]">
          <div className="absolute md:w-[280px] component-body lg:w-[450px] h-fit py-10 p-2 z-1 bg-[#0051f315] backdrop-blur-[9px] backdrop-saturate-[120%]   rounded-2xl left-1/2 top-55">
            <div className="flex gap-2 p-2 pb-5  border-b-2">
              <p className="text-4xl p-1 font-headerFont text-white bg-[#0000008d] ">
                create group
              </p>
              <button
                onClick={() => setGroupCreateModal(false)}
                className="w-fit ml-auto bg-[#000000a2] mr-2 text-white py-1.5 rounded-4xl font-headerFont flex items-center  text-2xl  cursor-pointer px-4 active:bg-transparent transition-all hover:bg-[#000d]"
              >
                back <span className="ml-4">X</span>
              </button>
            </div>
            <div className="my-6 ">
              <input
                type="text"
                placeholder="group-name"
                className="w-full py-3 rounded-4xl border-4 focus:border-[#000000c1] text-white outline-none bg-[#0000009f] px-5 text-xl shadow-[inset_2px_5px_10px_rgb(5,5,5)] mb-5"
              />
              <div className="w-full flex justify-center">
                <button className=" bg-[#000000a2] mr-2 text-white py-1.5 rounded-4xl font-headerFont flex items-center  text-2xl  cursor-pointer px-4 active:bg-transparent transition-all hover:bg-[#000d]">
                  create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {groupJoinModal && (
        <div className="absolute w-full rounded-2xl  h-[calc(100dvh-63px)] z-20 bg-[#1a5efdaa]">
          <div className="absolute md:w-[280px] component-body  lg:w-[400px] h-[calc(100dvh-263px)] p-2 z-1  rounded-2xl bg-[#0051f315] backdrop-blur-[9px] backdrop-saturate-[120%]  left-1/2 top-5">
            <div className="flex gap-2 p-2 pb-5  border-b-2">
              <p className="text-4xl p-1 font-headerFont text-white bg-[#0000008d] ">
                group list
              </p>
              <button
                onClick={() => setGroupJoinModal(false)}
                className="w-fit ml-auto bg-[#000000a2] mr-2 text-white py-1.5 rounded-4xl font-headerFont flex items-center  text-2xl  cursor-pointer px-4 active:bg-transparent transition-all hover:bg-[#000d]"
              >
                back <span className="ml-4">X</span>
              </button>
            </div>
            <div className=" h-[calc(100dvh-365px)] flex flex-col gap-2 rounded-2xl mt-1 overflow-y-auto bg-[#0051f315] backdrop-blur-[9px] backdrop-saturate-[120%] ">
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
              <GroupItem />
            </div>
          </div>
        </div>
      )}

      <section className="border-2 md:w-3xl lg:w-4xl rounded-2xl h-[calc(100dvh-63px)] overflow-hidden border-[#00000047] bg-[#0051f315] backdrop-blur-[9px] backdrop-saturate-[120%] ">
        <div>
          <div className="mx-4 mb-2 mt-4 lg:mt-6 flex justify-between">
            <p className="text-white font-headerFont text-3xl tracking-wide">
              chat with friends
            </p>
            <div className="flex">
              <button
                onClick={() => setGroupCreateModal(true)}
                className="w-fit ml-auto bg-[#0000008b] mr-2 text-white py-1.5 rounded-4xl font-headerFont flex items-center  text-2xl  cursor-pointer px-4 active:bg-transparent transition-all hover:bg-[#000d]"
              >
                create
              </button>
              <button
                onClick={() => setGroupJoinModal(true)}
                className="w-fit ml-auto bg-[#0000008b] mr-2 text-white py-1.5 rounded-4xl font-headerFont flex items-center  text-2xl  cursor-pointer px-4 active:bg-transparent transition-all hover:bg-[#000d]"
              >
                join
              </button>
            </div>
          </div>
          <div className="border-b-2 flex items-center gap-1 border-[#00000024]">
            <SearchBar />
          </div>
          <div className="grid grid-cols-1 gap-1 h-[calc(100dvh-55px)]  overflow-y-auto ">
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
            <GroupItem />
          </div>
        </div>
      </section>
    </>
  );
};

export default GroupChatList;
