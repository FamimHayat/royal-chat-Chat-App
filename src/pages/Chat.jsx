import React from "react";
import ChatList from "../components/chat-components/ChatList";
import ChatBox from "../components/chat-components/Chatbox";

const Chat = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row scale-[98%] lg:scale-[95%]">
        <ChatList />
         <ChatBox/> 
        {/* <div className="w-full h-[calc(100dvh-63px)] flex justify-center items-center">
          <p className="text-3xl text-white px-2 bg-[#00000080]">select to start chat</p>
        </div> */}
      </div>
    </>
  );
};

export default Chat;
