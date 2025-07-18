import React from "react";
import ChatList from "../components/chat-components/ChatList";
import { useSelector } from "react-redux"
import ChatBox from "../components/chat-components/ChatBox"


const Chat = () => {
  const friendData = useSelector((state) => state.friendUserData.UserData);
  return (
    <>
      <div className="flex flex-col md:flex-row scale-[98%] lg:scale-[95%]">
        <ChatList />
        {friendData ? (
          <ChatBox />
        ) : (
          <div className="w-full h-[calc(100dvh-63px)] flex justify-center items-center">
            <p className="text-3xl text-white px-2 bg-[#00000080]">
              select to start chat
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Chat;
