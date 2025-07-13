import React, { useEffect, useRef, useState } from "react";
import { FaSmile, FaArrowRight, FaBackspace } from "react-icons/fa";
import MyMassage from "../other_components/massages/MyMassage";
import OtherMassage from "../other_components/massages/SenderMassage";
import { useSelector } from "react-redux";
import {
  getDatabase,
  onValue,
  push,
  ref,
  set,
  update,
} from "firebase/database";
import EmojiPicker from "emoji-picker-react";
import { PiDotsThreeOutlineLight } from "react-icons/pi";


const ChatBox = () => {
  const db = getDatabase();
  const friendData = useSelector((state) => state.friendUserData.UserData);
  const chatboxRef = useRef(null);
  
  const myData = useSelector((state) => state.signedUserData.UserData);

  const [emoji, setEmoji] = useState(false);
  const [friendModal, setFriendModal] = useState(false);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  

  // message send function
  const handleSendMessage = () => {
    set(push(ref(db, "messages/")), {
      chatMessage: message,
      senderId: myData.uid,
      receiverId: friendData.id,
    });

    update(ref(db, "friendList/" + friendData.conversationId), {
      lastMessage: message,
    });


    setMessage("");
    setEmoji(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  useEffect(() => {
    onValue(ref(db, "messages/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((items) => {
        if (
          (items.val().senderId === myData.uid ||
            items.val().receiverId === myData.uid) &
          (items.val().senderId === friendData.id ||
            items.val().receiverId === friendData.id)
        ) {
          arr.push({ ...items.val(), id: items.key });
        }
      });
      setMessageList(arr);
    });
  }, [friendData, myData]);

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messageList]);

  return (
    <section className=" relative w-full h-[calc(100dvh-63px)] ml-3 rounded-2xl border-2 border-[#00000047] bg-[#0051f315] overflow-hidden backdrop-blur-[9px] backdrop-saturate-[120%] shadow-2xl">
      <div>
        <div className="w-full flex items-center justify-between gap-5 px-5 py-1 border-b-2 border-[#ffffff3a]">
          <div className="flex items-center  gap-5">
            <img
              src="/friends.png"
              alt="my-image"
              className="w-18 rounded-full"
            />
            <p className="bg-[#0000003a] text-2xl font-headerFont tracking-wide text-[#fff] p-1">
              {friendData.userName}
            </p>
          </div>
          <div className="">
            <button
              onClick={() => {
                setFriendModal(true);
              }}
              className=" text-white cursor-pointer transition-all  bg-[#00000051] hover:bg-[#000000ac] px-2"
            >
              <PiDotsThreeOutlineLight className="text-4xl" />
            </button>{" "}
          </div>
          {friendModal && (
            <div className="absolute right-5  top-20.5 w-full h-dvh flex justify-end bg-[#00000041]">
              <div className=" rounded-2xl component-body overflow-hidden backdrop-blur-[2px] bg-[#00000096] backdrop-saturate-[120% lg:w-sm h-[calc(100dvh-500px)]">
                <div className="w-full">
                  <button
                    onClick={() => {
                      setFriendModal(false);
                    }}
                    className="cursor-pointer"
                  >
                    <h2 className="text-white font-headerFont font-light text-3xl m-3">
                      X
                    </h2>
                  </button>
                  <div className="w-35 h-35 mx-auto border-6 border-transparent outline-4 outline-white rounded-full overflow-hidden">
                    <img src="/friends.png" alt="friend-image" />
                  </div>
                  <h3 className="w-fit mx-auto text-3xl font-headerFont text-white p-1 bg-[#ffffff3e] mt-8">
                    {friendData.userName}
                  </h3>
                  <div className="flex flex-col mt-10 gap-3 overflow-hidden">
                    <button className="text-2xl py-2 text-white font-textFont bg-[#82a04c] transition-all cursor-pointer hover:bg-[#347433] hover:scale-115 active:bg-transparent">
                      unfriend
                    </button>
                    <button className="text-2xl py-2 text-white font-textFont bg-[#e14434] transition-all cursor-pointer hover:bg-[#cb0404] hover:scale-115 active:bg-transparent">
                      {" "}
                      block user
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          ref={chatboxRef}
          className="px-2 h-[calc(100dvh-225px)] w-full overflow-y-auto"
        >
          {messageList.map((item) =>
            item.senderId === myData.uid ? (
              <MyMassage key={item.id} message={item.chatMessage} />
            ) : (
              <OtherMassage key={item.id} message={item.chatMessage} />
            )
          )}
        </div>

        <div className="relative">
          {emoji && (
            <div className="absolute scale-75 sm:scale-100 md:scale-75 lg:scale-100 bottom-2 right-10 z-50">
              <EmojiPicker
                onEmojiClick={(e) => setMessage((prev) => prev + e.emoji)}
                className="bg-black rounded-xl shadow-md !"
              />
            </div>
          )}
        </div>

        <div>
          <div className="flex items-center gap-2 p-2 bg-[#1c1c1c] rounded-b-xl">
            <div className="w-full flex gap-2 items-center">
              <div className="w-full">
                <input
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="type your message"
                  value={message}
                  onKeyPress={handleKeyPress}
                  className="w-full flex-grow px-4 py-4 text-xl rounded-full   bg-[#2b2b2b] text-white placeholder:text-gray-400 outline-none shadow-inner shadow-black"
                />
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setEmoji(!emoji)}
                  className="w-6 h-6 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white text-white active:bg-transparent hover:bg-white/10"
                >
                  <FaSmile className="text-2xl cursor-pointer" />
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={!message}
                  className="w-6 h-6 sm:w-12 sm:h-12 flex items-center justify-center rounded-full border border-white text-white active:bg-transparent hover:bg-white/10"
                >
                  <FaArrowRight className="text-2xl cursor-pointer" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatBox;
