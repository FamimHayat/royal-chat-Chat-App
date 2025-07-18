import React from "react";
import GroupChatList from "../components/group-components/GroupChatList";
import GroupChatBox from "../components/group-components/GroupChatBox";
import { useSelector } from "react-redux";

const Groups = () => {
  const groupData = useSelector((state) => state.activeGroupData.groupData);

  return (
    <div className="flex flex-col md:flex-row scale-[98%] lg:scale-[95%]">
      <GroupChatList />
      {groupData ? (
        <GroupChatBox />
      ) : (
        <div className="w-full h-[calc(100dvh-63px)] flex justify-center items-center">
          <p className="text-3xl text-white px-2 bg-[#00000080]">
            select to start chat
          </p>
        </div>
      )}
    </div>
  );
};

export default Groups;
