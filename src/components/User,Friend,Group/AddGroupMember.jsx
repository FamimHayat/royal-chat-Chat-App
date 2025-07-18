import React from "react";
import { getDatabase, push, ref, set } from "firebase/database";

const AddGroupMember = ({ userName, groupData, id }) => {
  
  
 

  const db = getDatabase();

  const handleAdd = () => {
    set(push(ref(db, "groupMembers/")), {
      groupId: groupData.id,
      memberName: userName,
      memberId: id,
    });
  };

  return (
    <div>
      <div
        // onClick={handleActiveChat}
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
        </div>
        <div className="ml-auto">
          <button
            onClick={handleAdd}
            className="w-fit ml-auto bg-[#0000007d] mr-2 text-white py-1.5 rounded-4xl font-headerFont flex items-center  text-2xl  cursor-pointer px-4 active:bg-transparent transition-all hover:text-[#000000c3] hover:bg-[#7bc36bfc]"
          >
            add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddGroupMember;
