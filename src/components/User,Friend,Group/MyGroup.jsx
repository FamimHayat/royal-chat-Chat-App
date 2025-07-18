import React, { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import AddGroupMember from "./AddGroupMember";
import { getDatabase, onValue, ref } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { groupChat } from "../../../reduxStorage/slices/FriendAuthSlice";

const MyGroup = ({ data }) => {
  const db = getDatabase();
  const dispatch = useDispatch();

  const [addMemberModal, setAddMemberModal] = useState(false);
  const myData = useSelector((state) => state.signedUserData.UserData);
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    onValue(ref(db, "friendList/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((items) => {
        if (
          items.val().creatorId === myData.uid ||
          items.val().participantId === myData.uid
        ) {
          arr.push({ ...items.val(), id: items.key });
        }
      });
      setFriendList(arr);
    });
  }, []);

  const handleSelect = () => {
    dispatch(groupChat(data));
  };

  return (
    <>
      {addMemberModal && (
        <div>
          <div className="absolute w-full rounded-2xl  h-[calc(100dvh-63px)] z-20 bg-[#1a5efdaa]">
            <div className="absolute md:w-[280px] component-body  lg:w-[400px] h-[calc(100dvh-563px)] p-2 z-1  rounded-2xl bg-[#0051f315] backdrop-blur-[9px] backdrop-saturate-[120%]  left-1/3 top-5 ">
              <div className="flex items-center gap-2 p-2 pb-5  border-b-2">
                <p className="text-2xl p-1 font-headerFont text-white bg-[#0000008d] ">
                  add to <br />
                  <span className="text-4xl underline">{data.groupName}</span>
                </p>
                <button
                  onClick={() => setAddMemberModal(false)}
                  className="w-fit ml-auto text-3xl bg-[#000000a2] mr-2 text-white py-1.5 h-fit rounded-4xl font-headerFont flex items-center    cursor-pointer px-4 active:bg-transparent transition-all hover:bg-[#000d]"
                >
                  back <span className="ml-4">X</span>
                </button>
              </div>
              <div className=" h-[calc(100dvh-365px)] flex flex-col gap-2 rounded-2xl mt-1 overflow-y-auto bg-[#0051f315] backdrop-blur-[9px] backdrop-saturate-[120%] ">
                {friendList.map((item) =>
                  item.creatorId === myData.uid ? (
                    <AddGroupMember
                      key={item.id}
                      conversationId={item.id}
                      userName={item.participantUserName}
                      profilePicture={item.participantPhotoURL}
                      id={item.participantId}
                      lastMessage={item.lastMessage}
                      groupData={data}
                    />
                  ) : (
                    <AddGroupMember
                      key={item.id}
                      conversationId={item.id}
                      userName={item.creatorUserName}
                      profilePicture={item.creatorPhotoURL}
                      id={item.creatorId}
                      lastMessage={item.lastMessage}
                      groupData={data}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
        <div
          onClick={handleSelect}
          className=" w-full flex h-fit cursor-pointer py-1 bg-[#0000005f] px-4 transition-all hover:scale-102 hover:bg-[#000000ac] active:bg-transparent"
        >
          <div className="h-15 w-15 flex justify-center items-center border-2 border-transparent mr-2 lg:mr-5 rounded-full outline-2 bg-[#2116f7b1]">
            <h2 className="text-4xl text-white font-headerFont capitalize">
              {data.groupName[0]}
            </h2>
          </div>
          <div className="text-left">
            <p className="text-2xl font-headerFont text-white tracking-wide">
              {data.groupName}
            </p>
            <p className="text-lg font-textFont text-white tracking-wide">
              groupMassage
            </p>
          </div>
          {/* <div className="ml-auto">
          <p className="text-lg font-textFont text-white">time</p>
        </div> */}
          <button
            onClick={() => setAddMemberModal(true)}
            className="ml-auto text-4xl text-white cursor-pointer transition-all hover:bg-[#00000080] "
          >
            <HiOutlineDotsVertical />
          </button>
        </div>
      </div>
    </>
  );
};

export default MyGroup;
