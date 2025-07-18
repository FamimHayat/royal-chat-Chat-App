import React, { useEffect, useRef, useState } from "react";
import User from "../User,Friend,Group/User";
import { FaSmile, FaArrowRight, FaImage } from "react-icons/fa";

import OtherMassage from "../other_components/massages/SenderMassage";
import MyMassage from "../other_components/massages/MyMassage";
import { useSelector } from "react-redux";
import { getDatabase, onValue, push, ref, set } from "firebase/database";

const GroupChatBox = () => {
  const db = getDatabase();
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const groupData = useSelector((state) => state.activeGroupData.groupData);
  const myData = useSelector((state) => state.signedUserData.UserData);

  const handleSendMessage = () => {
    set(push(ref(db, "groupMessage/")), {
      message,
      senderId: myData.uid,
      senderName: myData.displayName,
      receiverId: groupData.id,
    });
  };

  useEffect(() => {
    onValue(ref(db, "groupMessage/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((items) => {
        if (groupData.id === items.val().receiverId) {
          arr.push({ ...items.val(), id: items.key });
        }
      });
      setMessageList(arr);
    });
  }, [groupData]);

  return (
    <section className=" w-full h-[calc(100dvh-63px)] rounded-2xl overflow-hidden  ml-3 border-2 border-[#0000004e] bg-[#0051f315] backdrop-blur-[9px] backdrop-saturate-[120%]">
      <div className="  rounded-2xl">
        <div className="flex items-center gap-5 justify-center py-1 border-b-2 border-[#ffffff3a]">
          <img src="/groups.png" alt="my-image" className="w-18 rounded-full" />
          <p className="bg-[#ffffff3a] text-2xl font-headerFont text-[#000000c2] p-1 ">
            {groupData.groupName}
          </p>
        </div>
        <div className="px-2 h-[calc(100dvh-225px)] w-full   overflow-y-auto ">
          {messageList.map((item) => {
            console.log(item);

            return item.senderId === myData.uid ? (
              <MyMassage key={item.id} message={item.message} />
            ) : (
              <OtherMassage key={item.id} message={item.message} />
            );
          })}
        </div>
        <div>
          <div className="flex items-center gap-2 p-2 bg-[#1c1c1c] rounded-b-xl">
            <input
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="type your message"
              className="flex-grow px-4 py-4 text-xl rounded-full bg-[#2b2b2b] text-white placeholder:text-gray-400 outline-none shadow-inner shadow-black"
            />

            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white active:bg-transparent hover:bg-white/10">
              <FaSmile className="text-2xl cursor-pointer " />
            </button>

            <button
              onClick={handleSendMessage}
              className="w-12 h-12 flex items-center justify-center rounded-full border border-white text-white active:bg-transparent hover:bg-white/10"
            >
              <FaArrowRight className="text-2xl cursor-pointer " />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroupChatBox;
