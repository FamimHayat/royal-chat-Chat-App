import React from "react";
import { useDispatch } from "react-redux";
import { friendUser } from "../../../reduxStorage/slices/FriendAuthSlice";

const Friend = ({
  userName,
  profilePicture,
  id,
  conversationId,
  lastMessage,
}) => {
  const dispatch = useDispatch();
  const handleActiveChat = () => {
    dispatch(friendUser({ userName, profilePicture, id, conversationId }));
  };

  return (
    <>
      <button
        onClick={handleActiveChat}
        className="w-full flex h-fit cursor-pointer py-1 bg-[#0000005f] px-4 transition-all hover:scale-102 hover:bg-[#000000ac] active:bg-transparent"
      >
        <div className="h-15 w-15 border-2 border-transparent mr-2 lg:mr-5 rounded-full outline-2 ">
          <img
            src="/friends.png"
            alt="user-image"
            className="w-15 rounded-full "
          />
        </div>
        <div className="text-left">
          <p className="text-2xl font-headerFont text-white tracking-wide">
            {userName}
          </p>
          <p className="text-lg font-textFont text-stone-300 tracking-wide">
            {lastMessage && lastMessage.length > 12
              ? lastMessage.substring(0, 15) + "..."
              : lastMessage}
          </p>
        </div>
        <div className="ml-auto">
          <p className="text-lg font-textFont text-white">time</p>
        </div>
      </button>
    </>
  );
};

export default Friend;
