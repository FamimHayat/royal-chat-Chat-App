import React, { useState } from "react";

import { HiPlusSmall } from "react-icons/hi2";

import SearchBar from "../other_components/SearchBar";
import GroupItem from "../User,Friend,Group/GroupItem";
import MyGroup from "../User,Friend,Group/MyGroup";
import { getDatabase, onValue, push, ref, set } from "firebase/database";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const GroupChatList = () => {
  const db = getDatabase();
  const [groupCreateModal, setGroupCreateModal] = useState(false);
  const [groupJoinModal, setGroupJoinModal] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groups, setGroups] = useState([]);
  const [groupMember, setGroupMember] = useState([]);

  const myData = useSelector((state) => state.signedUserData.UserData);

  const handleCreateGroup = () => {
    set(push(ref(db, "groupList/")), {
      groupName,
      creatorName: myData.displayName,
      creatorId: myData.uid,
    });
    setGroupCreateModal(false);
  };

  useEffect(() => {
    onValue(ref(db, "groupMembers/"), (snapshot) => {
      let memberIds = [];
      snapshot.forEach((items) => {
        if (items.val().memberId === myData.uid) {
          memberIds.push(items.val().groupId);
        }
      });

      setGroupMember(memberIds);

      // Only now fetch group list
      onValue(ref(db, "groupList/"), (groupSnap) => {
        let arr = [];
        groupSnap.forEach((groupItem) => {
          arr.push({ ...groupItem.val(), id: groupItem.key });
        });
        setGroups(arr);
      });
    });
  }, []);

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
                onChange={(e) => setGroupName(e.target.value)}
                className="w-full py-3 rounded-4xl border-4 focus:border-[#000000c1] text-white outline-none bg-[#0000009f] px-5 text-xl shadow-[inset_2px_5px_10px_rgb(5,5,5)] mb-5"
              />
              <div className="w-full flex justify-center">
                <button
                  onClick={handleCreateGroup}
                  className=" bg-[#000000a2] mr-2 text-white py-1.5 rounded-4xl font-headerFont flex items-center  text-2xl  cursor-pointer px-4 active:bg-transparent transition-all hover:bg-[#000d]"
                >
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
              {groups.map((item) => {
                if (
                  !(
                    item.creatorId === myData.uid ||
                    groupMember.includes(item.id)
                  )
                ) {
                  return <GroupItem key={item.id} data={item} />;
                }
              })}
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
          <div className="flex flex-col gap-1 h-[calc(100dvh-55px)]  overflow-y-auto ">
            {groups.map((item) => {
              if (
                item.creatorId === myData.uid ||
                groupMember.includes(item.id)
              ) {
                return <MyGroup key={item.id} data={item} id={item.id} />;
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default GroupChatList;
